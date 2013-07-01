<?php

namespace Trackme\BackendBundle\Controller;

use JMS\DiExtraBundle\Annotation as DI;
use JMS\Payment\CoreBundle\Entity\Payment;
use JMS\Payment\CoreBundle\PluginController\Result;
use JMS\Payment\CoreBundle\Plugin\Exception\ActionRequiredException;
use JMS\Payment\CoreBundle\Plugin\Exception\Action\VisitUrl;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class PaymentController extends Controller
{

    /** @DI\Inject */
    private $request;

    /** @DI\Inject */
    private $router;

    /** @DI\Inject("doctrine.orm.entity_manager") */
    private $em;

    /** @DI\Inject("payment.plugin_controller") */
    private $ppc;

    /**
     * @Template()
     */
    public function listAction()
    {
        $em = $this->getDoctrine()->getManager();

        $security = $this->get('security.context');

        if (!$security->isGranted('ROLE_SUPER_ADMIN')) {
            return $this->redirect($this->generateUrl('admin_business_payments'));
        }

        $uf = $this->forward('trackme.payment.controller:ufAction')->getContent();
        
        return $this->render("TrackmeBackendBundle:Payment:list.html.twig", array('uf' => $uf));
    }

    public function businessListAction(Request $request)
    {
        $this->forward('trackme.payment.controller:ufAction')->getContent();
        return $this->render("TrackmeBackendBundle:Payment:business_list.html.twig");
    }

    public function detailsAction(Request $request)
    {
        $form = $this->getFormFactory()->create('jms_choose_payment_method', null, array(
            'amount'   => $order->getAmount(),
            'currency' => 'EUR',
            'default_method' => 'payment_paypal', // Optional
            'predefined_data' => array(
                'paypal_express_checkout' => array(
                    'return_url' => $this->router->generate('payment_complete', array(
                        'orderNumber' => $order->getOrderNumber(),
                    ), true),
                    'cancel_url' => $this->router->generate('payment_cancel', array(
                        'orderNumber' => $order->getOrderNumber(),
                    ), true)
                ),
            ),
        ));

        if ('POST' === $this->request->getMethod()) {
            $form->bindRequest($this->request);

            if ($form->isValid()) {
                $this->ppc->createPaymentInstruction($instruction = $form->getData());

                $order->setPaymentInstruction($instruction);
                $this->em->persist($order);
                $this->em->flush($order);

                return new RedirectResponse($this->router->generate('payment_complete', array(
                    'orderNumber' => $order->getOrderNumber(),
                )));
            }
        }

        return array(
            'form' => $form->createView()
        );
    }

    /**
     * @Route("/{orderNumber}/complete", name = "payment_complete")
     */
    public function completeAction(Order $order)
    {
        $instruction = $order->getPaymentInstruction();
        if (null === $pendingTransaction = $instruction->getPendingTransaction()) {
            $payment = $this->ppc->createPayment($instruction->getId(), $instruction->getAmount() - $instruction->getDepositedAmount());
        } else {
            $payment = $pendingTransaction->getPayment();
        }

        $result = $this->ppc->approveAndDeposit($payment->getId(), $payment->getTargetAmount());
        if (Result::STATUS_PENDING === $result->getStatus()) {
            $ex = $result->getPluginException();

            if ($ex instanceof ActionRequiredException) {
                $action = $ex->getAction();

                if ($action instanceof VisitUrl) {
                    return new RedirectResponse($action->getUrl());
                }

                throw $ex;
            }
        } else if (Result::STATUS_SUCCESS !== $result->getStatus()) {
            throw new \RuntimeException('Transaction was not successful: '.$result->getReasonCode());
        }

        // payment was successful, do something interesting with the order
    }

    public function ufAction(){
        $JsonSource = "http://indicadoresdeldia.cl/webservice/indicadores.json";
        $json = json_decode(file_get_contents($JsonSource));

        if(!$json)
            return new Response(null);
        else
            return new Response(floatval(preg_replace("/[^-0-9\,]/","",$json->indicador->uf)));

    }

    /** @DI\LookupMethod("form.factory") */
    protected function getFormFactory() {}

}
