<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller;

use JMS\DiExtraBundle\Annotation as DI;
use JMS\Payment\CoreBundle\Entity\Payment;
use JMS\Payment\CoreBundle\PluginController\Result;
use JMS\Payment\CoreBundle\Plugin\Exception\ActionRequiredException;
use JMS\Payment\CoreBundle\Plugin\Exception\Action\VisitUrl;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\RedirectResponse;

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

        $payments = $em->getRepository('Trackme\BackendBundle\Entity\Subscription')->getPayments();

        $uf = $this->forward('trackme.payment.controller:ufAction')->getContent();

        return $this->render("TrackmeBackendBundle:Payment:list.html.twig", array('payments' => $payments, 'uf' => $uf));
    }

    public function businessListAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $security = $this->get('security.context');
        $business = $security->getToken()->getUser()->getBusiness();

        $payments_pendent = $em->getRepository('Trackme\BackendBundle\Entity\Subscription')->getPendentPayments($business);
        $approved = $em->getRepository('Trackme\BackendBundle\Entity\Subscription')->getPaymentsBusiness($business, 12);

        $serie_user = $em->getRepository('Trackme\BackendBundle\Entity\Business')->getUserBusinessById($business);
        $serie_coor = $em->getRepository('Trackme\BackendBundle\Entity\Coordinate')->getStatsByWeekByBusiness($business);
        $serie_ot   = $em->getRepository('Trackme\BackendBundle\Entity\Ot')->getOtsByWeekByBusiness($business);

        $this->forward('trackme.payment.controller:ufAction')->getContent();

        return $this->render("TrackmeBackendBundle:Payment:business_list.html.twig", array('payments' => $payments_pendent, 'approved' => $approved, 'user' => $serie_user, 'coor' => $serie_coor, 'ot' => $serie_ot));
    }

   /**
    * @Template()
    */
    public function detailsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $payment = $em->getRepository('Trackme\BackendBundle\Entity\Subscription')->find($request->get('id'));

        if (!$payment) {
            throw $this->createNotFoundException('La pagina solicitada no existe');
        }

        $security = $this->get('security.context');
        $business = $security->getToken()->getUser()->getBusiness();
        if ($payment->getBusiness() != $business) {
            throw $this->createNotFoundException('La pagina solicitada no existe');
        }

        $form = $this->getFormFactory()->create('jms_choose_payment_method', null, array(
            'amount'   => $payment->getAmount(),
            'currency' => 'USD',
            'default_method' => 'payment_paypal', // Optional
            'predefined_data' => array(
                'paypal_express_checkout' => array(
                    'return_url' => $this->router->generate('admin_business_complete_payment', array(
                        'id' => $payment->getId(),
                    ), true),
                    'cancel_url' => $this->router->generate('admin_business_complete_payment', array(
                        'id' => $payment->getId(),
                    ), true)
                ),
            ),
        ));

        if ('POST' === $request->getMethod()) {

            $form->bind($request);

            if ($form->isValid()) {
                $this->ppc->createPaymentInstruction($instruction = $form->getData());

                $payment->setPaymentInstruction($instruction);
                $this->em->persist($payment);
                $this->em->flush($payment);

                return new RedirectResponse($this->router->generate('admin_business_complete_payment', array(
                    'id' => $payment->getId(),
                )));
            }
        }

        return array(
            'form' => $form->createView(),
            'id_payment' => $payment->getId()
        );
    }

    public function completeAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $subscription = $em->getRepository('Trackme\BackendBundle\Entity\Subscription')->find($request->get('id'));
        $instruction = $subscription->getPaymentInstruction();
        $instruction->getExtendedData()->set('checkout_params',  array('L_PAYMENTREQUEST_0_NAME0' => "Pago mensualidad Trackme",
                                                                    'L_PAYMENTREQUEST_0_NUMBER0' => $subscription->getId(),
                                                                    'L_PAYMENTREQUEST_0_AMT0' => $subscription->getAmount(),
                                                                    'L_PAYMENTREQUEST_0_QTY0' => '1',
                                                                    'PAYMENTREQUEST_0_CURRENCYCODE' => 'USD'));
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
        } elseif (Result::STATUS_SUCCESS !== $result->getStatus()) {
            $this->get('session')->getFlashBag()->add(
                'error',
                'El pago no fue realizado.'
            );

            return new RedirectResponse($this->router->generate('admin_business_payments', array(
                  'id' => $subscription->getId(),
                )));
            throw new \RuntimeException('Transaction was not successful: '.$result->getReasonCode());
        }

        $this->get('session')->getFlashBag()->add(
            'success',
            'El pago fue realizado y está siendo procesado.'
        );

        return new RedirectResponse($this->router->generate('admin_business_payments', array(
                  'id' => $subscription->getId(),
                )));

    }

    public function ufAction()
    {
        $JsonSource = "http://indicadoresdeldia.cl/webservice/indicadores.json";
        $json = json_decode(file_get_contents($JsonSource));

        if(!$json)

            return new Response(null);
        else
            return new Response(floatval(preg_replace("/[^-0-9\,]/","",$json->indicador->uf)));

    }

    public function dolarAction()
    {
        $xmlSource = "http://indicadoresdeldia.cl/webservice/indicadores.xml";
        $xml = simplexml_load_file($xmlSource);

        if(!$xml)

            return new Response(null);
        else
            return new Response(floatval(str_replace("$", "", str_replace(",",".",$xml->moneda->dolar))));

    }

    /** @DI\LookupMethod("form.factory") */
    protected function getFormFactory() {}

}
