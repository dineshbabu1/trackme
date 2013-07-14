<?php

namespace Trackme\BackendBundle\Controller\Vehicle;

use Admingenerated\TrackmeBackendBundle\BaseVehicleController\ShowController as BaseShowController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ShowController extends BaseShowController
{
	public function indexAction($pk)
    {
        $Vehicle = $this->getObject($pk);

        $this->checkCredentials('hasRole("ROLE_ADMIN") OR hasRole("ROLE_SUPER_ADMIN")', $Vehicle);


        if (!$Vehicle) {
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Vehicle with id $pk can't be found");
        }

        if ($Vehicle->getBusiness() != $this->get('security.context')->getToken()->getUser()->getBusiness())
        	throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Vehicle with id $pk can't be found");

        return $this->render('TrackmeBackendBundle:VehicleShow:index.html.twig', $this->getAdditionalRenderParameters($Vehicle) + array(
            "Vehicle" => $Vehicle
        ));
    }
}
