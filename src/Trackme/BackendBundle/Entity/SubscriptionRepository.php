<?php

namespace Trackme\BackendBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * SubscriptionRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SubscriptionRepository extends EntityRepository
{
    public function getPayments()
    {
        $em = $this->getEntityManager();

        $query = $em->createQuery('
            SELECT s, p, pi, b
            FROM TrackmeBackendBundle:Subscription s
            LEFT JOIN s.paymentInstruction pi
            LEFT JOIN pi.payments p
            LEFT JOIN s.business b
            WHERE p.state = 8

            ORDER BY p.updatedAt DESC');

        return $query->getResult();
    }
    
    public function getPaymentsBusiness($business, $limit)
    {
        $em = $this->getEntityManager();

        $query = $em->createQuery('
            SELECT s, p, pi, b
            FROM TrackmeBackendBundle:Subscription s
            LEFT JOIN s.paymentInstruction pi
            LEFT JOIN pi.payments p
            LEFT JOIN s.business b
            WHERE p.state = 8 AND b.id = :business
            ORDER BY p.updatedAt DESC')->setMaxResults($limit);
        $query->setParameter('business', $business->getId());

        return $query->getResult();
    }
}
