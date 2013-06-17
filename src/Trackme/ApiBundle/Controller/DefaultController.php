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

            if (!isset($json) || !$json->lat || !$json->lng) {
                return new Response(json_encode(array('status' => 'bad request')), 400, array('Content-Type:' => 'application/json'));
            }

            if (!is_numeric($json->lat) || !(($json->lat >= -90) && ($json->lat <= 90))) {
                return new Response(json_encode(array('status' => 'Latitud debe ser entre -90 y 90 grados')), 400, array('Content-Type:' => 'application/json'));
            }

            if (!is_numeric($json->lng) || !(($json->lng >= -180) && ($json->lng <= 180))) {
                return new Response(json_encode(array('status' => 'Longitud debe ser entre -180 y 180 grados')), 400, array('Content-Type:' => 'application/json'));
            }

            $ironmq = $this->get('code_meme_iron_mq.messagequeue');
            $ironmq->postMessage('position_queue', array(
                'body' => 'El usuario: ' . $user . ' ha marcado posicion a las: ' . date('Y:m:d H:i:s'),
                'expires_in' => 60*60*24));

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

            $ironmq = $this->get('code_meme_iron_mq.messagequeue');
            $ironmq->postMessage('api_ot', array(
                'body' => 'El usuario: ' . $user . ' ha iniciado un OT a las: ' . date('Y:m:d H:i:s'),
                'expires_in' => 60*60*24));

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

            $ironmq = $this->get('code_meme_iron_mq.messagequeue');
            $ironmq->postMessage('api_ot', array(
                'body' => 'El usuario: ' . $user . ' ha finalizado un OT a las: ' . date('Y:m:d H:i:s'),
                'expires_in' => 60*60*24));

            $ot->setDateEnd(new \DateTime());
            $em->persist($ot);
            $em->flush();

            return new Response(json_encode(array('status' => 'ok')), 200, array('Content-Type:' => 'application/json'));
        }
    }

    public function calculateTotalKm()
    {
        
    }

}
