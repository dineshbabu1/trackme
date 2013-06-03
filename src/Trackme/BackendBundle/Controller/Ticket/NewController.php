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

namespace Trackme\BackendBundle\Controller\Ticket;

use Admingenerated\TrackmeBackendBundle\BaseTicketController\NewController as BaseNewController;

class NewController extends BaseNewController
{
    public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\Ticket $Ticket)
    {
        if ($this->get('security.context')->isGranted('ROLE_USER')) {
            $em = $this->getDoctrine()->getEntityManager();
            $State = $em->getRepository('Trackme\BackendBundle\Entity\TicketState')->findOneByName("Nuevo");
            $Ticket->setUser($this->get('security.context')->getToken()->getUser());
            $Ticket->setState($State);
        }
    }
}
