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

namespace Trackme\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Ivory\GoogleMap\Overlays\Marker;
use Ivory\GoogleMap\Overlays\Animation;

class DefaultController extends Controller
{
    /**
     * @Route("/hello/{name}")
     * @Template()
     */
    public function indexAction($name)
    {
        return array('name' => $name);
    }

    public function dashboard_adminAction()
    {
        $security = $this->get('security.context');
        if (!$security->isGranted('ROLE_SUPER_ADMIN')) {
            throw $this->createNotFoundException('La pagina solicitada no existe');
        }
        $em = $this->getDoctrine()->getManager();
        $last_business = $em->getRepository('Trackme\BackendBundle\Entity\Business')->findAll();
        return $this->render('TrackmeBackendBundle:Default:dashboard_admin.html.twig', array('business' => $last_business));
    }
    
    public function dashboardAction()
    {
        $security = $this->get('security.context');
        if ($security->isGranted('ROLE_SUPER_ADMIN')) {
            return $this->redirect($this->generateUrl('dashboard_admin'));
        }


        $result = $this->container->get('bazinga_geocoder.geocoder')
            ->using('yahoo')
            ->geocode($this->getRequest()->server->get('REMOTE_ADDR'));

        $marker = new Marker();
        $marker->setPosition(-33.424565,-70.65033, true);
        #$marker->setIcon('http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-9d7050/shapecolor-color/shadow-1/border-black/symbolstyle-contrast/symbolshadowstyle-no/gradient-no/truck-2.png');
        
        $map = $this->get('ivory_google_map.map');
        $map->setStylesheetOption('width', '1000px');
        $map->setStylesheetOption('height', '500px');
        $map->setCenter(-33.424565,-70.65033,true);
        $map->setMapOption('zoom', 13);
        $map->setLanguage('es');
        $map->addMarker($marker);
        
        return $this->render('TrackmeBackendBundle:Default:dashboard.html.twig', array('map' => $map));
    }
}
