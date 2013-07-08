<?php

namespace Trackme\BackendBundle\Controller\Ot;

use Admingenerated\TrackmeBackendBundle\BaseOtController\ShowController as BaseShowController;
use Ivory\GoogleMap\Overlays\Marker;
use Ivory\GoogleMap\Overlays\Polyline;
use Ivory\GoogleMap\Overlays\InfoWindow;

class ShowController extends BaseShowController
{

    public function indexAction($pk)
    {
        $Ot = $this->getObject($pk);



        if (!$Ot) {
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Ot with id $pk can't be found");
        }

        $map = $this->get('ivory_google_map.map');
        $map->setStylesheetOption('width', '100%');
        $map->setStylesheetOption('height', '500px');

        $map->setLanguage('es');
        
        $mapa = $this->showOt($Ot, $map);

        return $this->render('TrackmeBackendBundle:OtShow:index.html.twig', $this->getAdditionalRenderParameters($Ot) + array(
                "Ot" => $Ot,
                "map" => $mapa
            ));
    }

    public function showOt($ot, $map)
    {
        $baseurl = $this->getRequest()->getScheme() . '://' . $this->getRequest()->getHttpHost() . $this->getRequest()->getBasePath();
        $polyline = new Polyline();
        $polyline->setPrefixJavascriptVariable('polygon_' . $ot->getId());
        $polyline->setOption('fillColor', '#000000');
        $polyline->setOption('fillOpacity', 0.5);
        $polyline->setOptions(array(
            'fillColor' => '#000000',
            'fillOpacity' => 0.5,
        ));

        $last_coor = $ot->getCoordinates()->last();
        $first_coor = $ot->getCoordinates()->first();

        $markerFirst = new Marker();
        $markerFirst->setPosition($first_coor->getLat(), $first_coor->getLng(), true);
        $markerFirst->setIcon($baseurl . '/bundles/trackmebackend/img/letter_a.png');
        $map->addMarker($markerFirst);

        $markerLast = new Marker();
        $markerLast->setPosition($last_coor->getLat(), $last_coor->getLng(), true);
        $markerLast->setIcon($baseurl . '/bundles/trackmebackend/img/letter_b.png');
        $map->addMarker($markerLast);

        foreach ($ot->getCoordinates() as $c) {
            $polyline->addCoordinate($c->getLat(), $c->getLng(), true);
        }

        $map->addPolyline($polyline);
        $map->setCenter($first_coor->getLat(), $first_coor->getLng(), true);
        $map->setMapOption('zoom', 10);
        
        return $map;
    }

}
