<?php

namespace Trackme\BackendBundle\Controller\Review;

use Admingenerated\TrackmeBackendBundle\BaseReviewController\NewController as BaseNewController;

class NewController extends BaseNewController
{
	public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\Review $Review)
    {
        if ($this->get('security.context')->isGranted('ROLE_USER')) {
            $Review->setBusiness($this->get('security.context')->getToken()->getUser()->getBusiness());
        }
    }
}
