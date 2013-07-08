<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * BusinessRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BusinessRepository extends EntityRepository
{
    public function getLastBusiness()
    {
        $first_day_month = date('m', strtotime("first day of this month midnight"));
        $em = $this->getEntityManager();

        $query = $em->createQuery('
            SELECT b
            FROM TrackmeBackendBundle:Business b
            WHERE b.created_at > :first_day_month')->setMaxResults(20);
        $query->setParameter('first_day_month', $first_day_month);

        return $query->getArrayResult();
    }

    public function getLastOt($business, $limit)
    {
        $em = $this->getEntityManager();

        $query = $em->createQuery('
            SELECT o, c, u
            FROM TrackmeBackendBundle:Ot o
            LEFT JOIN o.coordinates c
            LEFT JOIN o.user u
            LEFT JOIN u.business b
            WHERE b.id = :business AND c.lat is not null AND c.lng is not null

            ORDER BY o.id DESC')->setMaxResults($limit);
        $query->setParameter('business', $business->getId());

        return $query->getResult();

    }

}
