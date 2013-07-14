<?php

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\EditController as BaseEditController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class EditController extends BaseEditController
{
	public function indexAction($pk)
    {
        $User = $this->getObject($pk);

                
        $this->checkCredentials('hasRole("ROLE_ADMIN") OR hasRole("ROLE_SUPER_ADMIN")', $User);


        if (!$User) {
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\User with id $pk can't be found");
        }

        if ($User->getBusiness() != $this->get('security.context')->getToken()->getUser()->getBusiness())
        	throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\User with id $pk can't be found");
        

        $form = $this->createForm($this->getEditType(), $User);

        return $this->render('TrackmeBackendBundle:UserEdit:index.html.twig', $this->getAdditionalRenderParameters($User) + array(
            "User" => $User,
            "form" => $form->createView(),
        ));
    }
}
