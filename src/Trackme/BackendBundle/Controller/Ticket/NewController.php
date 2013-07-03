<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
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
