<?php

/*
 * Copyright 2013 Gonzalo Moreno <goncab380@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Trackme\BackendBundle\Controller\Business;

use Admingenerated\TrackmeBackendBundle\BaseBusinessController\EditController as BaseEditController;

class EditController extends BaseEditController
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
