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
use Doctrine\ORM\Query\ResultSetMapping;

/**
 * CoordinateRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CoordinateRepository extends EntityRepository
{
    public function getActiveVehicles($users)
    {
        $coordinates = array();
        $ten_minutes_ago = date('Y-m-d H:i:s', strtotime("-3 minutes", time()));
        $em = $this->getEntityManager();

        $query = $em->createQuery("
            SELECT c, u
            FROM TrackmeBackendBundle:Coordinate c
            LEFT JOIN c.user u
            WHERE c.user IN (:users) AND c.created_at > :ten_minutes
            ORDER BY c.created_at DESC");
        $query->setParameter('users', $users);
        $query->setParameter('ten_minutes', $ten_minutes_ago);

        foreach ($query->getResult() as $c){
            if (!array_key_exists($c->getUser()->getId(), $coordinates)){
                $coordinates[$c->getUser()->getId()] = $c;
            }
        }
        
        return $coordinates;
    }
    
    /**
     * Stats for coordinates
     * @return type array
     */
    public function getStatsByWeek()
    {
        $em = $this->getEntityManager();
        $rsm = new ResultSetMapping();
        
        $rsm->addEntityResult('Trackme\BackendBundle\Entity\Coordinate', 'c');
        $rsm->addFieldResult('c', 'quantity', 'id');
        $rsm->addFieldResult('c', 'week', 'lat');

        // mapping results to the message entity

        $sql = "SELECT COUNT(c.id) as quantity, WEEK(c.created_at) as week
                FROM coordinate c
                WHERE MONTH(c.created_at) = MONTH(CURDATE())
                GROUP BY WEEK(c.created_at)";

        $query = $em->createNativeQuery($sql, $rsm);
        
        $stat = array();
        foreach ($query->getResult() as $q) {
            $stat[] = array($q->getLat(),$q->getId());
        }
        
        return $stat;
    }
    
    /**
     * 
     * @param Business $business
     * @return array
     */
    public function getStatsByWeekByBusiness($business)
    {
        $em = $this->getEntityManager();
        
        $query = $em->createQuery("
            SELECT COUNT(c.id) as quantity
            FROM TrackmeBackendBundle:Coordinate c
            LEFT JOIN c.user u
            WHERE u.business = :business");
        $query->setParameter('business', $business);
        
        $stat = $query->getSingleResult();
        
        return $stat;
    }
}
