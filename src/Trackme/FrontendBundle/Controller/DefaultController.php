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

use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Trackme\BackendBundle\Entity\Business;
use Trackme\BackendBundle\Entity\User;

class DefaultController extends Controller {

    public function indexAction() {
        $em = $this->getDoctrine()->getManager();
        $reviews = $em->getRepository('Trackme\BackendBundle\Entity\Review')->findBy(array('approved' => true));
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));
        $media = $em->getRepository('Trackme\BackendBundle\Entity\Media')->findBy(array('enabled' => true));
        return $this->render('TrackmeFrontendBundle:Default:index.html.twig', array('reviews' => $reviews, 'menu' => $menu, 'media' => $media));
    }
    
    public function signupuserAction(Request $request){
        if(!$request->get('token')){
            return $this->redirect($this->generateUrl('signup'));
        }
        $userManager = $this->get('fos_user.user_manager');
        $user = $userManager->createUser();
        $form = $this->createFormBuilder($user)
                ->add('username','text', array('label' => 'Usuario'))
                ->add('email','text')
                ->add('plain_password','repeated', array(
                    'type' => 'password',
                    'first_options' => array('label' => 'Password'),
                    'second_options' => array('label' => 'Confirmar Password')))
                ->add('emailable', 'checkbox', array('required' => false,'label' => 'Recibir emails', 'help' => 'Al aceptar, podremos enviarles correo con novedades e informes a su correo'))
                ->getForm();
        
        if ($request->getMethod() == "POST") {
            $em = $this->getDoctrine()->getManager();
            $business = $em->getRepository('Trackme\BackendBundle\Entity\Business')->findOneBy(array('token' => $request->get('token')));
            
            if(!$business){
                return $this->redirect($this->generateUrl('signup'));
            }
            
            $form->bind($request);

            if ($form->isValid()) {
                $userManager = $this->container->get('fos_user.user_manager');
                $userManipulator = new \FOS\UserBundle\Util\UserManipulator($userManager);
                
                $user = $form->getData();
                $user->setEnabled(TRUE);
                $user->setBusiness($business);
                $user->addRole($business->getRoleByState());
                $userManager->updateUser($user); 
                $em->persist($user);
                $em->flush();
                // Second step 

                $this->get('session')->getFlashBag()->add('success', 'Gracias por registrarse en Trackme.cl');

                return $this->redirect($this->generateUrl('fos_user_security_login'));
            }
        }
        return $this->render('TrackmeFrontendBundle:Default:signup_user.html.twig', array('form' => $form->createView(), 'token' => $request->get('token')));
    }

    public function signupAction(Request $request) {
        if(!$request->get('plan')){
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

    public function pageAction($url) {
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
    
    public function pricingAction() {
        $em = $this->getDoctrine()->getManager();
        $plans = $em->getRepository('Trackme\BackendBundle\Entity\Plan')->findAll();
        return $this->render('TrackmeFrontendBundle:Default:pricing.html.twig', array('plans' => $plans));
    }

}
