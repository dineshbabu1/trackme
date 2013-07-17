<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\EditController as BaseEditController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class EditController extends BaseEditController
{
	public function indexAction($pk)
    {
        $User = $this->getObject($pk);

                
        $this->checkCredentials('hasRole("ROLE_ADMIN") OR hasRole("ROLE_SUPER_ADMIN")', $User);


        if (!$User) {
            throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\User with id $pk can't be found");
        }

        if (!$this->get('security.context')->isGranted('ROLE_SUPER_ADMIN')){
            if ($User->getBusiness() != $this->get('security.context')->getToken()->getUser()->getBusiness())
                throw new NotFoundHttpException("The Trackme\BackendBundle\Entity\User with id $pk can't be found"); 
        }
        
        

        $form = $this->createForm($this->getEditType(), $User);

        return $this->render('TrackmeBackendBundle:UserEdit:index.html.twig', $this->getAdditionalRenderParameters($User) + array(
            "User" => $User,
            "form" => $form->createView(),
        ));
    }
}
