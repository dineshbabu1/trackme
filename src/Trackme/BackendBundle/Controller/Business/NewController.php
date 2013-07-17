<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller\Business;

use Admingenerated\TrackmeBackendBundle\BaseBusinessController\NewController as BaseNewController;

class NewController extends BaseNewController
{
	public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\Business $Business){
        
        $data = $form->getData();
        try {
            $reference = $this->container->get('bazinga_geocoder.geocoder')
                ->using('google_maps')
                ->geocode($data->getAddress());
        } catch (Exception $exc) {
            echo $exc->getMessage();
        }

        if ($reference->getLatitude() && $reference->getLongitude()) {
            $data->setLat($reference->getLatitude());
            $data->setLng($reference->getLongitude());
        }
    }
}
