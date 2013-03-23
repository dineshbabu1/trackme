<?php

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\NewController as BaseNewController;

class NewController extends BaseNewController
{
    public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\User $User)
    {
        if ($this->get('security.context')->isGranted('ROLE_BUSINESS')) {
            $User->setBusiness($this->get('security.context')->getToken()->getUser()->getBusiness());
        }
    }
}
