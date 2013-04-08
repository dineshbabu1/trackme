<?php

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
    
    public function dashboardAction()
    {


        $marker = new Marker();
        $marker->setPosition(-33.424565,-70.65033, true);
        $marker->setIcon('http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-9d7050/shapecolor-color/shadow-1/border-black/symbolstyle-contrast/symbolshadowstyle-no/gradient-no/truck-2.png');
        
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
