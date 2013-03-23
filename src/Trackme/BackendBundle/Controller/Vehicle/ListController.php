<?php

namespace Trackme\BackendBundle\Controller\Vehicle;

use Admingenerated\TrackmeBackendBundle\BaseVehicleController\ListController as BaseListController;

class ListController extends BaseListController
{
    protected function getQuery()
    {
        
        if ($this->get('security.context')->isGranted('ROLE_BUSINESS')) {
            $query = $this->getDoctrine()
                ->getEntityManager()
                ->createQueryBuilder()
                ->select('q')
                ->from('Trackme\BackendBundle\Entity\Vehicle', 'q')
                ->where('q.business = :business')
                ->setParameter(':business', $this->get('security.context')->getToken()->getUser()->getBusiness());
        }else{
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
