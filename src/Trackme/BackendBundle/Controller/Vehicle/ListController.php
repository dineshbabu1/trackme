<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Controller\Vehicle;

use Admingenerated\TrackmeBackendBundle\BaseVehicleController\ListController as BaseListController;

class ListController extends BaseListController
{
    protected function getQuery()
    {

        if ($this->get('security.context')->isGranted('ROLE_USER')) {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\Vehicle', 'q')
                ->where('q.business = :business')
                ->setParameter(':business', $this->get('security.context')->getToken()->getUser()->getBusiness());
        } else {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\Vehicle', 'q');
        }

        $this->processSort($query);
        $this->processFilters($query);
        $this->processScopes($query);

        return $query->getQuery();
    }
}
