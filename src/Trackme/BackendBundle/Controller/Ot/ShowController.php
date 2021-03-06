<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller\Ot;

use Admingenerated\TrackmeBackendBundle\BaseOtController\ShowController as BaseShowController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Ivory\GoogleMap\Overlays\Marker;
use Ivory\GoogleMap\Overlays\Polyline;

class ShowController extends BaseShowController
{

    public function indexAction($pk)
    {
        $Ot = $this->getObject($pk);

        if (!$Ot) {
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Ot with id $pk can't be found");
        }

        if (!in_array($Ot->getUser()->getId() , $this->get('security.context')->getToken()->getUser()->getColegas()))
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\Ot with id $pk can't be found");

        if ($Ot->getCoordinates()->count() == 0) {
            return $this->render('TrackmeBackendBundle:OtShow:index.html.twig', $this->getAdditionalRenderParameters($Ot) + array(
                "Ot" => $Ot,
                "map" => null
            ));
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
        $map->setMapOption('zoom', 13);

        return $map;
    }

}
