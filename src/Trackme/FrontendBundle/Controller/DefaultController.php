<?php

/*
 * Copyright 2013 Gonzalo Moreno <goncab380@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Trackme\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Trackme\BackendBundle\Entity\Business;
use Trackme\BackendBundle\Entity\User;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\UserEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $reviews = $em->getRepository('Trackme\BackendBundle\Entity\Review')->findBy(array('approved' => true));
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));
        $media = $em->getRepository('Trackme\BackendBundle\Entity\Media')->findBy(array('enabled' => true));

        return $this->render('TrackmeFrontendBundle:Default:index.html.twig', array('reviews' => $reviews, 'menu' => $menu, 'media' => $media));
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

                $user->setBusiness($business);
                $user->addRole($business->getRoleByState());
                $userManager->updateUser($user);

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
                ->getForm();

        return $this->render('TrackmeFrontendBundle:Default:signup.html.twig', array('form' => $form->createView(), 'state' => $state));
    }

    public function createAction(Request $request)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $business = new Business();
        $form = $this->createFormBuilder($business)
                ->add('name', 'text', array('label' => 'Nombre'))
                ->add('email', 'email')
                ->add('phone', 'text', array('label' => 'Telefono'))
                ->getForm();

        $form->bind($request);

            if ($form->isValid()) {
                $state = $em->getRepository('Trackme\BackendBundle\Entity\ClientState')->find($request->get('state'));
                $object = $form->getData();
                $object->setState($state);
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
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));

        if (!$page) {
            throw $this->createNotFoundException('La página solicitada no existe');
        }
        $seoPage = $this->container->get('sonata.seo.page');

        $seoPage
        ->setTitle("Track Me | ".$page->getTitle())
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
        $plans = $em->getRepository('Trackme\BackendBundle\Entity\Plan')->findAll();

        return $this->render('TrackmeFrontendBundle:Default:pricing.html.twig', array('plans' => $plans));
    }

}
