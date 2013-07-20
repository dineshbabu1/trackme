<?php

/*
 * This file is part of the TrackmeApiBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Trackme\BackendBundle\Entity\Coordinate;
use Trackme\BackendBundle\Entity\Ot;

class DefaultController extends Controller
{

    /**
     *
     * @param  \Symfony\Component\HttpFoundation\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if ($request->getMethod() == 'POST') {
            $json = json_decode($request->getContent());

            $user = $this->get('security.context')->getToken()->getUser();

            if (!$user) {
                return new Response(json_encode(array('status' => 'not found')), 404, array('Content-Type:' => 'application/json'));
            }

            if (!isset($json) || !isset($json->lat) || !isset($json->lng)) {
                return new Response(json_encode(array('status' => 'bad request')), 400, array('Content-Type:' => 'application/json'));
            }

            if (!is_numeric($json->lat) || !(($json->lat >= -90) && ($json->lat <= 90))) {
                return new Response(json_encode(array('status' => 'Latitud debe ser entre -90 y 90 grados')), 400, array('Content-Type:' => 'application/json'));
            }

            if (!is_numeric($json->lng) || !(($json->lng >= -180) && ($json->lng <= 180))) {
                return new Response(json_encode(array('status' => 'Longitud debe ser entre -180 y 180 grados')), 400, array('Content-Type:' => 'application/json'));
            }

            $coordinate = new Coordinate();
            $coordinate->setLat($json->lat);
            $coordinate->setLng($json->lng);
            $coordinate->setUser($user);

            if ($user->hasOtActive()) {
                $coordinate->setOt($user->hasOtActive());
            }
            $em->persist($coordinate);
            $em->flush();

            return new Response(json_encode(array('status' => 'ok')), 200, array('Content-Type:' => 'application/json'));
        }
    }

    /**
     *
     * @param  \Symfony\Component\HttpFoundation\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function startAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        if ($request->getMethod() == 'POST') {
            $user = $this->get('security.context')->getToken()->getUser();

            if (!$user) {
                return new Response(json_encode(array('status' => 'not found')), 404, array('Content-Type:' => 'application/json'));
            }

            if ($user->hasOtActive()) {
                return new Response(json_encode(array('status' => 'ot active')), 200, array('Content-Type:' => 'application/json'));
            }

            $ot = new Ot();
            $ot->setUser($user);
            $ot->setDateStart(new \DateTime());
            $em->persist($ot);
            $em->flush();

            return new Response(json_encode(array('status' => 'ok')), 200, array('Content-Type:' => 'application/json'));
        }
    }

    /**
     *
     * @param  \Symfony\Component\HttpFoundation\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function finishAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if ($request->getMethod() == 'POST') {
            $user = $this->get('security.context')->getToken()->getUser();

            if (!$user) {
                return new Response(json_encode(array('status' => 'not found')), 404, array('Content-Type:' => 'application/json'));
            }

            $ot = $user->hasOtActive();
            if (!$ot) {
                return new Response(json_encode(array('status' => 'sin ot activa')), 200, array('Content-Type:' => 'application/json'));
            }

            $ot->setDateEnd(new \DateTime());
            $em->persist($ot);
            $em->flush();

            return new Response(json_encode(array('status' => 'ok')), 200, array('Content-Type:' => 'application/json'));
        }
    }

    public function calculateTotalKm()
    {

    }

    /**
     * Check if user exists
     * @param  \Symfony\Component\HttpFoundation\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function loginAction(Request $request)
    {
        $user = $this->get('security.context')->getToken()->getUser();

        if (!$user) {
            return new Response(json_encode(array('status' => 'not found')), 404, array('Content-Type:' => 'application/json'));
        }

        return new Response(json_encode(array('status' => 'ok', 'refresh_time' => $user->getPositionRefresh())), 200, array('Content-Type:' => 'application/json'));
    }

}
