<?php

namespace Trackme\BackendBundle\Controller\Vehicle;

use Admingenerated\TrackmeBackendBundle\BaseVehicleController\NewController as BaseNewController;

class NewController extends BaseNewController
{
	public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\Vehicle $Vehicle)
    {
        if ($this->get('security.context')->isGranted('ROLE_USER')) {
            $Vehicle->setBusiness($this->get('security.context')->getToken()->getUser()->getBusiness());
        }
    }
}
