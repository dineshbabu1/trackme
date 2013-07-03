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

use Admingenerated\TrackmeBackendBundle\BaseUserController\ListController as BaseListController;

class ListController extends BaseListController
{
    protected function getQuery()
    {

        if ($this->get('security.context')->isGranted('ROLE_SUPER_ADMIN')) {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\User', 'q');
        } else {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\User', 'q')
                ->where('q.business = :business')
                ->setParameter(':business', $this->get('security.context')->getToken()->getUser()->getBusiness());
        }

        $this->processSort($query);
        $this->processFilters($query);
        $this->processScopes($query);

        return $query->getQuery();
    }
}
