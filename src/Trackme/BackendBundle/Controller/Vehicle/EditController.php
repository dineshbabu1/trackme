<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller\Vehicle;

use Admingenerated\TrackmeBackendBundle\BaseVehicleController\EditController as BaseEditController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class EditController extends BaseEditController
{
	public function indexAction($pk)
    {
        $Vehicle = $this->getObject($pk);

                
        $this->checkCredentials('hasRole("ROLE_ADMIN") OR hasRole("ROLE_SUPER_ADMIN")', $Vehicle);


        if (!$Vehicle) {
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Vehicle with id $pk can't be found");
        }

        if (!$this->get('security.context')->isGranted('ROLE_SUPER_ADMIN')){
            if ($Vehicle->getBusiness() != $this->get('security.context')->getToken()->getUser()->getBusiness())
            	throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Vehicle with id $pk can't be found");
        }
        
        $form = $this->createForm($this->getEditType(), $Vehicle);

        return $this->render('TrackmeBackendBundle:VehicleEdit:index.html.twig', $this->getAdditionalRenderParameters($Vehicle) + array(
            "Vehicle" => $Vehicle,
            "form" => $form->createView(),
        ));
    }
}
