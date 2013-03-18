<?php

namespace Trackme\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Trackme\BackendBundle\Entity\Coordinate;

class DefaultController extends Controller {

  public function indexAction(Request $request) {
    
    $em = $this->getDoctrine()->getManager();
    
    if ($request->getMethod() == 'POST') {
      $json = json_decode($request->getContent());
      
      $user = $em->getRepository('Trackme\BackendBundle\Entity\User')->find($json->user_id);
      if(!$user){
        return new Response(json_encode(array('value' => 'faaaail')), 404, array('Content-Type:' => 'application/json'));
      }
      $coordinate = new Coordinate();
      $coordinate->setLat($json->lat);
      $coordinate->setLng($json->lng);
      $coordinate->setUser($user);
      $em->persist($coordinate);
      $em->flush();
      
      return new Response(json_encode(array('value' => 'eeeexito')), 200, array('Content-Type:' => 'application/json'));
    }
  }

}
