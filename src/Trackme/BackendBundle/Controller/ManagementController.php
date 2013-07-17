<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ManagementController extends Controller
{
    /**
     * @Template()
     */
    public function dashboardAction()
    {
        $security = $this->get('security.context');
        
        if (!$security->isGranted('ROLE_ADMIN')) {
            throw $this->createNotFoundException('La pagina solicitada no existe');
        }
        
        $business = $security->getToken()->getUser()->getBusiness();

        $em = $this->getDoctrine()->getManager();
        
        $serie_user = $em->getRepository('Trackme\BackendBundle\Entity\Business')->getUserBusinessById($business);
        $serie_coor = $em->getRepository('Trackme\BackendBundle\Entity\Coordinate')->getStatsByWeekByBusiness($business);
        $serie_ot   = $em->getRepository('Trackme\BackendBundle\Entity\Ot')->getOtsByWeekByBusiness($business);
        
        return $this->render("TrackmeBackendBundle:Management:dashboard.html.twig", array('user' => $serie_user, 'coor' => $serie_coor, 'ot' => $serie_ot));

    }

}
