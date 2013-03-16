<?php

namespace Trackme\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));
        return $this->render('TrackmeFrontendBundle:Default:index.html.twig', array('menu' => $menu));
    }
    
    public function pageAction($url)
    {
        $em = $this->getDoctrine()->getManager();
        $page = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findOneBy(array('url' => $url));
        $menu = $em->getRepository('Trackme\BackendBundle\Entity\Page')->findBy(array('enabled' => true), array('weigth' => 'ASC', 'title' => 'ASC'));
        
        if (!$page) {
            throw $this->createNotFoundException('La página solicitada no existe');
        }
        return $this->render('TrackmeFrontendBundle:Default:page.html.twig',
                array('page' => $page,
                      'menu' => $menu
                    ));
    }
}
