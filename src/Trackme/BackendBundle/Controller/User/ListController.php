<?php

namespace Trackme\BackendBundle\Controller\User;

use Admingenerated\TrackmeBackendBundle\BaseUserController\ListController as BaseListController;

class ListController extends BaseListController {

    protected function processScopes($query) {
        $scopes = $this->getScopes();

        $queryFilter = $this->get('admingenerator.queryfilter.doctrine');
        $queryFilter->setQuery($query);
        if ($this->get('security.context')->isGranted('ROLE_BUSINESS')) {
            if (isset($scopes['business']) && $scopes['business'] == 'All') {
                $queryFilter->addDefaultFilter("business", $this->get('security.context')->getToken()->getUser()->getBusiness()->getId());
            }
        }
    }

}
