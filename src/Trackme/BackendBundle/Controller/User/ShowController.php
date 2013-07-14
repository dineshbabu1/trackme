<?php

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\ShowController as BaseShowController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ShowController extends BaseShowController
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

        return $this->render('TrackmeBackendBundle:UserShow:index.html.twig', $this->getAdditionalRenderParameters($User) + array(
            "User" => $User
        ));
    }
}
