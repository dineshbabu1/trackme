<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

/**
 * OtRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class OtRepository extends EntityRepository
{
    public function getOtsByWeek()
    {
        $em = $this->getEntityManager();
        $rsm = new ResultSetMapping();

        $rsm->addEntityResult('Trackme\BackendBundle\Entity\Ot', 'c');
        $rsm->addFieldResult('c', 'quantity', 'id');
        $rsm->addFieldResult('c', 'week', 'totalKm');

        $sql = "SELECT COUNT(c.id) as quantity, WEEK(c.created_at) as week
                FROM ot c
                WHERE MONTH(c.created_at) = MONTH(CURDATE())
                GROUP BY WEEK(c.created_at)";

        $query = $em->createNativeQuery($sql, $rsm);

        $stat = array();
        foreach ($query->getResult() as $q) {
            $stat[] = array($q->getTotalKm(), $q->getId());
        }

        return $stat;
    }

    public function getOtsByWeekByBusiness($business)
    {
        $em = $this->getEntityManager();

        $query = $em->createQuery("
            SELECT COUNT(o.id) as quantity
            FROM TrackmeBackendBundle:Ot o
            LEFT JOIN o.user u
            WHERE u.business = :business");
        $query->setParameter('business', $business->getId());

        $stat = $query->getSingleResult();

        return $stat;
    }
}
