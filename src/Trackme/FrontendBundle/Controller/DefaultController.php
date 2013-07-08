<?php

/*
 * This file is part of the TrackmeFrontendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Trackme\BackendBundle\Entity\Business;
use Trackme\BackendBundle\Entity\User;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\UserEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;

class DefaultController extends Controller
{

    public function indexAction(Request $request)
    {
        if ($request->get('path') != 'home') {
            return $this->redirect($this->generateUrl('homepage', array('path' => 'home') ));
        }
        $em = $this->getDoctrine()->getManager();
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true, 'in_header' => true), array('weigth' => 'ASC', 'title' => 'ASC'));

        return $this->render('TrackmeFrontendBundle:Default:index.html.twig', array('menu' => $menu));
    }

    public function signupuserAction(Request $request)
    {
        if (!$request->get('token')) {
            return $this->redirect($this->generateUrl('signup'));
        }

        /** @var $formFactory \FOS\UserBundle\Form\Factory\FactoryInterface */
        $formFactory = $this->get('fos_user.registration.form.factory');
        /** @var $dispatcher \Symfony\Component\EventDispatcher\EventDispatcherInterface */
        $dispatcher = $this->get('event_dispatcher');

        $userManager = $this->get('fos_user.user_manager');

        $user = $userManager->createUser();
        $user->setEnabled(true);

        $dispatcher->dispatch(FOSUserEvents::REGISTRATION_INITIALIZE, new UserEvent($user, $request));

        $form = $formFactory->createForm();

        $form->setData($user);

        if ($request->getMethod() === "POST") {
            $em = $this->getDoctrine()->getManager();
            $business = $em->getRepository('Trackme\BackendBundle\Entity\Business')->findOneBy(array('token' => $request->get('token')));
            if (!$business) {
                return $this->redirect($this->generateUrl('signup'));
            }

            $form->bind($request);

            if ($form->isValid()) {

                $event = new FormEvent($form, $request);
                $dispatcher->dispatch(FOSUserEvents::REGISTRATION_SUCCESS, $event);

                $groupManager = $this->get('fos_user.group_manager');
                $group = $groupManager->findGroupByName('CLIENTE');

                $user->setBusiness($business);
                $user->addRole($business->getRoleByState());
                $user->addGroup($group);
                $userManager->updateUser($user);

                try {
                    $ironmq = $this->get('code_meme_iron_mq.messagequeue');
                    $ironmq->postMessage('signup_queue', 'El usuario: ' . $user . ' se registro a las: ' . date('Y:m:d H:i:s'),
                        array('expires_in' => 600));
                } catch (Exception $exc) {
                    echo $exc->getMessage();
                }

                if (null === $response = $event->getResponse()) {
                    $url = $this->container->get('router')->generate('fos_user_registration_confirmed');
                    $response = new RedirectResponse($url);
                }

                $dispatcher->dispatch(FOSUserEvents::REGISTRATION_COMPLETED, new FilterUserResponseEvent($user, $request, $response));

                return $response;
            }
        }

        return $this->render('TrackmeFrontendBundle:Default:signup_user.html.twig', array('form' => $form->createView(), 'token' => $request->get('token')));
    }

    public function signupAction(Request $request)
    {
        if (!$request->get('plan')) {
            return $this->redirect($this->generateUrl('pricing'));
        }

        $em = $this->getDoctrine()->getEntityManager();
        $plan = $em->getRepository('Trackme\BackendBundle\Entity\Plan')->find($request->get('plan'));

        switch ($plan->getName()) {
            case 'Trial':
                $state = $em->getRepository('Trackme\BackendBundle\Entity\ClientState')->findOneBy(array('name' => $plan->getName()));
                break;
            case 'Básico':
                $state = $em->getRepository('Trackme\BackendBundle\Entity\ClientState')->findOneBy(array('name' => $plan->getName()));
                break;
            case 'Business':
                $state = $em->getRepository('Trackme\BackendBundle\Entity\ClientState')->findOneBy(array('name' => $plan->getName()));
                break;
            case 'Full':
                $state = $em->getRepository('Trackme\BackendBundle\Entity\ClientState')->findOneBy(array('name' => $plan->getName()));
                break;
            default:
                $state = null;
                break;
        }

        $business = new Business();
        $form = $this->createFormBuilder($business)
            ->add('name', 'text', array('label' => 'Nombre'))
            ->add('email', 'email')
            ->add('phone', 'text', array('label' => 'Telefono'))
            ->add('address', 'text', array('label' => 'Direccion', 'help' => 'Calle 123, Comuna Ciudad'))
            ->getForm();

        return $this->render('TrackmeFrontendBundle:Default:signup.html.twig', array('form' => $form->createView(), 'state' => $state, 'plan' => $plan));
    }

    public function createAction(Request $request)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $business = new Business();
        $form = $this->createFormBuilder($business)
            ->add('name', 'text', array('label' => 'Nombre'))
            ->add('email', 'email')
            ->add('phone', 'text', array('label' => 'Telefono'))
            ->add('address', 'text', array('label' => 'Direccion', 'help' => 'Calle 123, Comuna Ciudad'))
            ->getForm();

        $form->bind($request);

        if ($form->isValid()) {
            $state = $em->getRepository('Trackme\BackendBundle\Entity\ClientState')->find($request->get('state'));
            $plan = $em->getRepository('Trackme\BackendBundle\Entity\Plan')->find($request->get('plan'));

            $object = $form->getData();
            
            try {
                $reference = $this->container->get('bazinga_geocoder.geocoder')
                    ->using('google_maps')
                    ->geocode($object->getAddress());
            } catch (Exception $exc) {
                echo $exc->getMessage();
            }

            if ($reference->getLatitude() && $reference->getLongitude()) {
                $object->setLat($reference->getLatitude());
                $object->setLng($reference->getLongitude());
            }
            
            $object->setState($state);
            $object->setPlan($plan);
            $em->persist($object);
            $em->flush();
            // Second step
            return $this->redirect($this->generateUrl('signup_user', array('token' => $object->getToken())));
        }
    }

    public function pageAction($url)
    {
        $em = $this->getDoctrine()->getManager();
        $page = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findOneBy(array('url' => $url));
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true, 'in_header' => true), array('weigth' => 'ASC', 'title' => 'ASC'));

        if (!$page) {
            throw $this->createNotFoundException('La página solicitada no existe');
        }
        $seoPage = $this->container->get('sonata.seo.page');

        $seoPage
            ->setTitle("Track Me | " . $page->getTitle())
            ->addMeta('property', 'og:title', $page->getTitle())
            ->addMeta('property', 'og:type', 'blog')
        ;

        return $this->render('TrackmeFrontendBundle:Default:page.html.twig', array('page' => $page,
                'menu' => $menu
            ));
    }

    public function pricingAction()
    {
        $em = $this->getDoctrine()->getManager();
        $plans = $em->getRepository('Trackme\BackendBundle\Entity\Plan')->findBy(array(), array('price' => 'asc'));

        return $this->render('TrackmeFrontendBundle:Default:pricing.html.twig', array('plans' => $plans));
    }

}
