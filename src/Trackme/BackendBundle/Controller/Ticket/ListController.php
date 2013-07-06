<?php

namespace Trackme\BackendBundle\Controller\Ticket;

use Admingenerated\TrackmeBackendBundle\BaseTicketController\ListController as BaseListController;

class ListController extends BaseListController
{
	protected function getQuery()
    {

        if ($this->get('security.context')->isGranted('ROLE_SUPER_ADMIN')) {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\Ticket', 'q');
        } else {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\Ticket', 'q')
                ->where('q.user = :user')
                ->setParameter(':user', $this->get('security.context')->getToken()->getUser());
        }

        $this->processSort($query);
        $this->processFilters($query);
        $this->processScopes($query);

        return $query->getQuery();
    }
}
