<?php

namespace Trackme\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Trackme\BackendBundle\Entity\Business;
use Trackme\BackendBundle\Entity\User;

class DefaultController extends Controller {

    public function indexAction() {
        $em = $this->getDoctrine()->getManager();
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));
        return $this->render('TrackmeFrontendBundle:Default:index.html.twig', array('menu' => $menu));
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
                ->add('plain_password','password', array('label' => 'Password'))
                ->add('emailable', 'checkbox', array('label' => 'Recibir emails', 'help' => 'Al aceptar, podremos enviarles correo con novedades e informes a su correo'))
                ->getForm();
        
        if ($request->isMethod('POST')) {
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
                $user->addRole('ROLE_BUSINESS');
                $userManager->updateUser($user); 
                $em->persist($user);
                $em->flush();
                // Second step 
                
                return $this->redirect($this->generateUrl('fos_user_security_login'));
            }
        }
        return $this->render('TrackmeFrontendBundle:Default:signup_user.html.twig', array('form' => $form->createView(), 'token' => $request->get('token')));
    }

    public function signupAction(Request $request) {
        $em = $this->getDoctrine()->getEntityManager();
        $business = new Business();
        $form = $this->createFormBuilder($business)
                ->add('name', 'text', array('label' => 'Nombre'))
                ->add('email', 'email')
                ->add('phone', 'text', array('label' => 'Telefono'))
                ->getForm();

        if ($request->isMethod('POST')) {
            $form->bind($request);

            if ($form->isValid()) {
                $object = $form->getData();
                $em->persist($object);
                $em->flush();
                // Second step 
                
                return $this->redirect($this->generateUrl('signup_user', array('token' => $object->getToken())));
            }
        }

        return $this->render('TrackmeFrontendBundle:Default:signup.html.twig', array('form' => $form->createView()));
    }

    public function pageAction($url) {
        $em = $this->getDoctrine()->getManager();
        $page = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findOneBy(array('url' => $url));
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));

        if (!$page) {
            throw $this->createNotFoundException('La página solicitada no existe');
        }
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
