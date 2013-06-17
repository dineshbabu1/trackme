<?php

/*
 * Copyright 2013 Gonzalo Moreno <goncab380@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Trackme\BackendBundle\Menu;

use Symfony\Component\DependencyInjection\ContainerAware;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Router;
use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;

class Menu extends ContainerAware
{
  protected $factory;

    /**
     * @param \Knp\Menu\FactoryInterface $factory
     */
    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    /**
     * @param Request $request
     * @param Router  $router
     */
    public function createAdminMenu(Request $request)
    {
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttributes(array('id' => 'main_navigation', 'class' => 'nav'));
        $security = $this->container->get('security.context');

        if ( $security->isGranted('ROLE_SUPER_ADMIN') ) {
          $frontend = $this->addDropdownMenu($menu, 'Página Pública')->setExtra('icon', 'icon-home');
          $this->addNavLinkRoute($frontend, 'Páginas', 'Trackme_BackendBundle_Page_list')->setExtra('icon', 'icon-file');
          $this->addNavLinkRoute($frontend, 'Reseñas', 'Trackme_BackendBundle_Review_list')->setExtra('icon', 'icon-thumbs-up');
          $this->addNavLinkRoute($frontend, 'Planes', 'Trackme_BackendBundle_Plan_list')->setExtra('icon', 'icon-shopping-cart');
          $business = $this->addNavLinkRoute($menu, 'Clientes', 'Trackme_BackendBundle_Business_list')->setExtra('icon', 'icon-heart');
          $user = $this->addNavLinkRoute($menu, 'Usuarios', 'Trackme_BackendBundle_User_list')->setExtra('icon', 'icon-user');
          $ticket = $this->addNavLinkRoute($menu, 'Soporte', 'Trackme_BackendBundle_Ticket_list')->setExtra('icon', 'icon-user');
        } elseif ($security->isGranted('ROLE_ADMIN')) {
          $user = $this->addNavLinkRoute($menu, 'Mis Usuarios', 'Trackme_BackendBundle_User_list')->setExtra('icon', 'icon-user');
          $vehicle = $this->addNavLinkRoute($menu, 'Vehiculos', 'Trackme_BackendBundle_Vehicle_list')->setExtra('icon', 'icon-road');
        } elseif ($security->isGranted('ROLE_FULL')) {
          $review = $this->addNavLinkRoute($menu, 'Evaluar Sistema', 'Trackme_BackendBundle_Review_new')->setExtra('icon', 'icon-thumbs-up');
          $ticket = $this->addNavLinkRoute($menu, 'Soporte', 'Trackme_BackendBundle_Ticket_list')->setExtra('icon', 'icon-list');
        }

        return $menu;
    }

    /**
     * @param Request $request
     * @param Router  $router
     */
    public function createDashboardMenu(Request $request)
    {
        $menu = $this->factory->createItem('root');

        $menu->setChildrenAttributes(array('id' => 'dashboard_sidebar', 'class' => 'nav nav-list'));
        $menu->setExtra('request_uri', $this->container->get('request')->getRequestUri());
        $menu->setExtra('translation_domain', 'Admingenerator');

        $this->addNavHeader($menu, 'Overview');
        $this->addNavLinkRoute($menu, 'Dashboard', 'AdmingeneratorDashboard_welcome')->setExtra('icon', 'icon-home');
        $this->addNavHeader($menu, 'Features');
        $this->addNavLinkRoute($menu, 'Commands', 'AdmingeneratorDashboard_documentation', array('document' => 'commands'))->setExtra('icon', 'icon-bullhorn');
        $this->addNavLinkRoute($menu, 'Filters', 'AdmingeneratorDashboard_documentation', array('document' => 'filters'))->setExtra('icon', 'icon-filter');
        $this->addNavLinkRoute($menu, 'Routing', 'AdmingeneratorDashboard_documentation', array('document' => 'routing'))->setExtra('icon', 'icon-globe');
        $this->addNavLinkRoute($menu, 'Forms', 'AdmingeneratorDashboard_documentation', array('document' => 'forms'))->setExtra('icon', 'icon-list');
        $this->addNavLinkRoute($menu, 'Templates', 'AdmingeneratorDashboard_documentation', array('document' => 'templates'))->setExtra('icon', 'icon-th-large');
        $this->addNavLinkRoute($menu, 'Model manager', 'AdmingeneratorDashboard_documentation', array('document' => 'orm'))->setExtra('icon', 'icon-random');

        return $menu;
    }

    protected function addNavHeader(ItemInterface $menu, $label)
    {
        $item = $menu->addChild($label);
        $item->setAttribute('class', 'nav-header');
        $item->setExtra('translation_domain', $menu->getExtra('translation_domain'));
        $menu->setExtra('request_uri', $menu->getExtra('request_uri'));

        return $item;
    }

    protected function addNavLinkURI(ItemInterface $menu, $label, $uri)
    {
        $item = $menu->addChild($label, array('uri' => $uri));
        $item->setExtra('translation_domain', $menu->getExtra('translation_domain'));
        $menu->setExtra('request_uri', $menu->getExtra('request_uri'));

        if ($item->getUri() == $menu->getExtra('request_uri')) {
          $item->setAttribute('class', 'active');
        }

        return $item;
    }

    protected function addNavLinkRoute(ItemInterface $menu, $label, $route, $routeParameters = array())
    {
        $item = $menu->addChild($label, array('route' => $route, 'routeParameters' => $routeParameters));
        $item->setExtra('translation_domain', $menu->getExtra('translation_domain'));
        $menu->setExtra('request_uri', $menu->getExtra('request_uri'));

        if ($item->getUri() == $menu->getExtra('request_uri')) {
          $item->setAttribute('class', 'active');
        }

        return $item;
    }

    protected function addDropdownMenu(ItemInterface $menu, $label, $caret = true)
    {
        $item = $this->addNavLinkURI($menu, $label, '#');
        $item->setLinkAttributes(array('class' => 'dropdown-toggle', 'data-toggle' => 'dropdown'));
        $item->setChildrenAttributes(array('class' => 'dropdown-menu'));
        $item->setAttributes(array('class' => 'dropdown'));
        $item->setExtra('translation_domain', $menu->getExtra('translation_domain'));
        $item->setExtra('caret', $caret);
        $menu->setExtra('request_uri', $menu->getExtra('request_uri'));

        return $item;
    }
}
