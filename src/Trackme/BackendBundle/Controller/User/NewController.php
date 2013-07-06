<?php

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\NewController as BaseNewController;

class NewController extends BaseNewController
{
	public function indexAction()
    {
        
        $user = $this->get('security.context')->getToken()->getUser();
        if (!$user->hasRole('ROLE_SUPER_ADMIN')) {
            if(!$user->getBusiness()->canCreateUser()){
                $this->get('session')->getFlashBag()->add('warning', 'Alcanzo el limite de usuarios permitidos en su plan.');
                return $this->redirect($this->generateUrl('Trackme_BackendBundle_User_list'));
            }
        }      
        $User = $this->getNewObject();

        $form = $this->createForm($this->getNewType(), $User);

        return $this->render('TrackmeBackendBundle:UserNew:index.html.twig', $this->getAdditionalRenderParameters($User) + array(
            "User" => $User,
            "form" => $form->createView(),
        ));

    }

    public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\User $User)
    {

        $business = $this->get('security.context')->getToken()->getUser()->getBusiness();
        $user = $this->get('security.context')->getToken()->getUser();
        if ($this->get('security.context')->isGranted('ROLE_ADMIN')) {
            $User->setBusiness($this->get('security.context')->getToken()->getUser()->getBusiness());
        }    
        
    }
}
