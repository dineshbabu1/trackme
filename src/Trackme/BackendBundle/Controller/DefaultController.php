<?php

namespace Trackme\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

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
        $map = $this->get('ivory_google_map.map');
        $map->setStylesheetOption('width', '1000px');
        $map->setStylesheetOption('height', '500px');
        $map->setCenter(-33.424565,-70.65033, true);
        $map->setMapOption('zoom', 13);
        $map->setLanguage('es');
        $marker = $this->get('ivory_google_map.marker');
        $map->addMarker($marker);
        
        return $this->render('TrackmeBackendBundle:Default:dashboard.html.twig', array('map' => $map));
    }
}
