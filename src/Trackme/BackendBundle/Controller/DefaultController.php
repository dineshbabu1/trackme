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
use Ivory\GoogleMap\Overlays\Polyline;
use Ivory\GoogleMap\Overlays\InfoWindow;
use Ivory\GoogleMap\Events\MouseEvent;
use Ob\HighchartsBundle\Highcharts\Highchart;

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

        $serie_coor = $em->getRepository('Trackme\BackendBundle\Entity\Coordinate')->getStatsByWeek();
        $serie_ot = $em->getRepository('Trackme\BackendBundle\Entity\Ot')->getOtsByWeek();

        $series_coor = array(
            array("name" => "Coordenadas", "data" => $serie_coor)
        );

        $ob = new Highchart();
        $ob->chart->renderTo('linechart_coor');  // The #id of the div where to render the chart
        $ob->title->text('Coordenadas por mes');
        $ob->xAxis->title(array('text' => "Semanas mes actual"));
        $ob->yAxis->title(array('text' => "Cantidad coordenadas"));
        $ob->series($series_coor);

        $series_ot = array(
            array("name" => "Ordenes de Transporte", "data" => $serie_ot)
        );

        $ob2 = new Highchart();
        $ob2->chart->renderTo('linechart_ot');  // The #id of the div where to render the chart
        $ob2->title->text('OT por mes');
        $ob2->xAxis->title(array('text' => "Semanas mes actual"));
        $ob2->yAxis->title(array('text' => "Cantidad ot"));
        $ob2->series($series_ot);

        $last_business = $em->getRepository('Trackme\BackendBundle\Entity\Business')->getLastBusiness();
        
        $payments = $em->getRepository('Trackme\BackendBundle\Entity\Subscription')->getPayments();

        return $this->render('TrackmeBackendBundle:Default:dashboard_admin.html.twig', array('payments' => $payments, 'business' => $last_business, 'chart_coor' => $ob, 'chart_ot' => $ob2));
    }

    public function dashboardAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $baseurl = $this->getRequest()->getScheme() . '://' . $this->getRequest()->getHttpHost() . $this->getRequest()->getBasePath();

        $security = $this->get('security.context');

        if ($security->isGranted('ROLE_SUPER_ADMIN')) {
            return $this->redirect($this->generateUrl('dashboard_admin'));
        }

        $business = $security->getToken()->getUser()->getBusiness();

        $last_ots = $em->getRepository('Trackme\BackendBundle\Entity\Business')->getLastOt($business, 10);

        // Las coordenadas activas de una empresa
        $actives = $em->getRepository('Trackme\BackendBundle\Entity\Coordinate')->getActiveVehicles($business->getIdUsers());

        $form = $this->createFormBuilder()
            ->add('origen', 'text', array('help' => 'Calle 123 Comuna o Ciudad'))
            ->add('destino', 'text', array('help' => 'Calle 123 Comuna o Ciudad'))
            ->add('precio_combustible', 'money', array('help' => 'Solo numeros', 'currency' => 'CLP'))
            ->add('kilometros_por_litro', 'text')
            ->getForm();

        $best_route = 0;
        $duration = 0;
        $summary = "";
        $estimate = null;
        $distance = null;

        $map = $this->get('ivory_google_map.map');
        $map->setStylesheetOption('width', '100%');
        $map->setStylesheetOption('height', '500px');
        if($business->getLat() && $business->getLng()){
            $map->setCenter($business->getLat(), $business->getLng(), true);
        }
        
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
                    $markerOrigen->setIcon($baseurl . '/bundles/trackmebackend/img/letter_a.png');
                    $map->addMarker($markerOrigen);
                }

                $destino = $this->container->get('bazinga_geocoder.geocoder')
                    ->using('google_maps')
                    ->geocode($data['destino']);
                if ($destino->getLatitude() && $destino->getLongitude()) {
                    $markerDestino = new Marker();
                    $markerDestino->setPosition($destino->getLatitude(), $destino->getLongitude());
                    $markerDestino->setIcon($baseurl . '/bundles/trackmebackend/img/letter_b.png');
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
            // POSICION ACTUAL DE MOVILES
            foreach ($actives as $active) {
                $infoWindow = $this->setInfoMarker($active);

                $marker = new Marker();
                $marker->setPosition($active->getLat(), $active->getLng(), true);
                $marker->setIcon($baseurl . '/bundles/trackmebackend/img/car.png');
                $marker->setInfoWindow($infoWindow);
                $map->addMarker($marker);
            }

//            if ($last_ots) {
//                $ots = reset($last_ots);
//
//                $polyline = new Polyline();
//                $polyline->setPrefixJavascriptVariable('polygon_'.$ots->getId());
//                $polyline->setOption('fillColor', '#000000');
//                $polyline->setOption('fillOpacity', 0.5);
//                $polyline->setOptions(array(
//                    'fillColor'   => '#000000',
//                    'fillOpacity' => 0.5,
//                ));
//
//                $last_coor = $ots->getCoordinates()->last();
//                $first_coor = $ots->getCoordinates()->first();
//
//                $markerFirst = new Marker();
//                $markerFirst->setPosition($first_coor->getLat(),$first_coor->getLng(), true);
//                $markerFirst->setIcon($baseurl.'/bundles/trackmebackend/img/letter_a.png');
//                $map->addMarker($markerFirst);
//
//                $markerLast = new Marker();
//                $markerLast->setPosition($last_coor->getLat(),$last_coor->getLng(), true);
//                $markerLast->setIcon($baseurl.'/bundles/trackmebackend/img/letter_b.png');
//                $map->addMarker($markerLast);
//
//                foreach ($ots->getCoordinates() as $c) {
//                    $polyline->addCoordinate($c->getLat(), $c->getLng(), true);
//                }
//
////                $map->addPolyline($polyline);
//                $map->setMapOption('zoom', 11);
//            } else {
//                
//            }
            $map->setMapOption('zoom', 11);
        }

        return $this->render('TrackmeBackendBundle:Default:dashboard.html.twig', array('estimate' => $estimate, 'duration' => $duration, 'distance' => $distance, 'map' => $map, 'form' => $form->createView()));
    }

    /**
     * Set a new infomarker with user last position
     * @param  \Trackme\BackendBundle\Entity\Coordinate $active
     * @return \Ivory\GoogleMap\Overlays\InfoWindow
     */
    public function setInfoMarker(\Trackme\BackendBundle\Entity\Coordinate $active)
    {
        $infoWindow = new InfoWindow();
        $name = $active->getUser()->getNombreCompleto();
        $user = $active->getUser()->getUsername();
        $phone = $active->getUser()->getPhone();
        $content = <<<STRING
<ul>
    <li>Usuario: $user</li>
    <li>Nombre: $name</li>
    <li>Teléfono: $phone</li>
</ul>
STRING;
        // Configure your info window options
        $infoWindow->setPrefixJavascriptVariable('info_window_');
        $infoWindow->setPosition($active->getLat(), $active->getLng(), true);
        $infoWindow->setPixelOffset(1.1, 2.1, 'px', 'pt');
        $infoWindow->setContent($content);
        $infoWindow->setAutoOpen(true);
        $infoWindow->setOpenEvent(MouseEvent::CLICK);
        $infoWindow->setAutoClose(true);
        $infoWindow->setOption('disableAutoPan', true);
        $infoWindow->setOption('zIndex', 10);
        $infoWindow->setOptions(array(
            'disableAutoPan' => true,
            'zIndex' => 10,
        ));

        return $infoWindow;
    }

}
