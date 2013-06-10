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
use Symfony\Component\HttpFoundation\Request;
use Ivory\GoogleMap\Overlays\Marker;
use Ivory\GoogleMap\Services\Directions\Directions;

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
        $last_business = $em->getRepository('Trackme\BackendBundle\Entity\Business')->getLastBusiness();

        return $this->render('TrackmeBackendBundle:Default:dashboard_admin.html.twig', array('business' => $last_business));
    }

    public function dashboardAction(Request $request)
    {
        $security = $this->get('security.context');

        if ($security->isGranted('ROLE_SUPER_ADMIN')) {
            return $this->redirect($this->generateUrl('dashboard_admin'));
        }

        $business = $security->getToken()->getUser()->getBusiness();
        
        $em = $this->getDoctrine()->getManager();
        // Las coordenadas activas de una empresa
        $actives = $em->getRepository('Trackme\BackendBundle\Entity\Coordinate')->getActiveVehicles($business->getIdUsers());

        $form = $this->createFormBuilder()
            ->add('origen', 'text', array('help' => 'Calle 123 Comuna o Ciudad'))
            ->add('destino', 'text', array('help' => 'Calle 123 Comuna o Ciudad'))
            ->add('precio_combustible', 'money', array('help' => 'Solo numeros', 'currency' => 'CLP'))
            ->add('kilometros_por_litro', 'text')
            ->getForm();

        $result = $this->container->get('bazinga_geocoder.geocoder')
            ->using('free_geo_ip')
            ->geocode($this->getRequest()->server->get('REMOTE_ADDR'));

        $best_route = 0;
        $duration = 0;
        $summary = "";
        $estimate = null;
        $distance = null;

        $map = $this->get('ivory_google_map.map');
        
        foreach ($actives as $active) {
            $marker = new Marker();
            $marker->setPosition($active->getLat(),$active->getLng(), true);
            $map->addMarker($marker);
        }

        $map->setStylesheetOption('width', '100%');
        $map->setStylesheetOption('height', '500px');
        $map->setCenter($result->getLatitude(), $result->getLongitude(), true);
        $map->setLanguage('es');

        if ($request->isMethod('POST')) {
            $form->bind($request);
            if ($form->isValid()) {
                $data = $form->getData();
                $origen = $this->container->get('bazinga_geocoder.geocoder')
                    ->using('google_maps')
                    ->geocode($data['origen']);
                if ($origen->getLatitude() && $origen->getLongitude()) {
                    $markerOrigen = new Marker();
                    $markerOrigen->setPosition($origen->getLatitude(), $origen->getLongitude());
                    $map->addMarker($markerOrigen);
                }

                $destino = $this->container->get('bazinga_geocoder.geocoder')
                    ->using('google_maps')
                    ->geocode($data['destino']);
                if ($destino->getLatitude() && $destino->getLongitude()) {
                    $markerDestino = new Marker();
                    $markerDestino->setPosition($destino->getLatitude(), $destino->getLongitude());
                    $map->addMarker($markerDestino);
                }
                $directions = $this->get('ivory_google_map.directions');
                $request = $this->get('ivory_google_map.directions_request');
                $request->setOrigin($data['origen']);
                $request->setDestination($data['destino']);
                // $request->setAvoidHighways($data['evitar_autopista']);
                // $request->setAvoidTolls($data['evitar_peaje']);

                $response = $directions->route($request);
                $routes = $response->getRoutes();
                // Iterate each routes
                foreach ($routes as $route) {
                    $legs = $route->getLegs();
                    foreach ($legs as $leg) {

                        $best_route = $leg->getDuration()->getValue();
                        $duration = $leg->getDuration()->getText();
                        $distance = $leg->getDistance()->getText();
                        $estimate = $leg->getDistance()->getValue() / 1000;
                        $estimate = $estimate / $data['kilometros_por_litro'];
                        $estimate = $estimate * $data['precio_combustible'];

                        $overviewPolyline = $route->getOverviewPolyline();
                        $map->addEncodedPolyline($overviewPolyline);
                    }
                    $map->setCenter($route->getBound()->getCenter());
                    $map->setMapOption('zoom', 11);
                }
            }
        } else {
            $map->setMapOption('zoom', 11);
        }

        return $this->render('TrackmeBackendBundle:Default:dashboard.html.twig', array('estimate' => $estimate, 'duration' => $duration, 'distance' => $distance, 'map' => $map, 'form' => $form->createView()));
    }

    public function getLastPosition($positions)
    {

    }

}
