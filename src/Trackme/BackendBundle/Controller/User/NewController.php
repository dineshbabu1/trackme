<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\NewController as BaseNewController;

class NewController extends BaseNewController
{

    public function preSave(\Symfony\Component\Form\Form $form, \Trackme\BackendBundle\Entity\User $User)
    {

        $business = $this->get('security.context')->getToken()->getUser()->getBusiness();
        $user = $this->get('security.context')->getToken()->getUser();
        if (!$user->hasRole('ROLE_SUPER_ADMIN')) {
            if ($user->hasRole('ROLE_FULL') && count($business->getUsers()) >= 50) {

                $this->get('session')->getFlashBag()->add('warning', 'Alcanzo el limite de usuarios permitidos en su plan.');

                return $this->redirect($this->generateUrl('Trackme_BackendBundle_User_list'));
            }

            if ($user->hasRole('ROLE_BUSINESS') && count($business->getUsers()) >= 25) {

                $this->get('session')->getFlashBag()->add('warning', 'Alcanzo el limite de usuarios permitidos en su plan.');

                return $this->redirect($this->generateUrl('Trackme_BackendBundle_User_list'));
            }

            if ($user->hasRole('ROLE_BASICO') && count($business->getUsers()) >= 5) {

                $this->get('session')->getFlashBag()->add('warning', 'Alcanzo el limite de usuarios permitidos en su plan.');

                return $this->redirect($this->generateUrl('Trackme_BackendBundle_User_list'));
            }

            if ($user->hasRole('ROLE_TRIAL') && count($business->getUsers()) >= 3) {

                $this->get('session')->getFlashBag()->add('warning', 'Alcanzo el limite de usuarios permitidos en su plan.');

                return $this->redirect($this->generateUrl('Trackme_BackendBundle_User_list'));
            }

            if ($this->get('security.context')->isGranted('ROLE_ADMIN')) {
                $User->setBusiness($this->get('security.context')->getToken()->getUser()->getBusiness());
            }
        }
    }

}
