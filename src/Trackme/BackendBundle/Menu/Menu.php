<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
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
          $this->addNavLinkRoute($frontend, 'Planes', 'Trackme_BackendBundle_Plan_list')->setExtra('icon', 'icon-shopping-cart');
          $business = $this->addNavLinkRoute($menu, 'Clientes', 'Trackme_BackendBundle_Business_list')->setExtra('icon', 'icon-heart');
          $user = $this->addNavLinkRoute($menu, 'Usuarios', 'Trackme_BackendBundle_User_list')->setExtra('icon', 'icon-user');
          $payments = $this->addNavLinkRoute($menu, 'Pagos', 'admin_global_payments')->setExtra('icon', 'icon-credit-card');
          $ticket = $this->addNavLinkRoute($menu, 'Soporte', 'Trackme_BackendBundle_Ticket_list')->setExtra('icon', 'icon-user');
          $profile = $this->addNavLinkRoute($menu, 'Perfil', 'fos_user_profile_edit')->setExtra('icon', 'icon-user');
        } elseif ($security->isGranted('ROLE_ADMIN')) {
          $empresa = $this->addDropdownMenu($menu, 'Empresa')->setExtra('icon', 'icon-home');
          $this->addNavLinkRoute($empresa, 'Usuarios', 'Trackme_BackendBundle_User_list');
          $this->addNavLinkRoute($empresa, 'Perfil Empresa', 'business_profile');
          $this->addNavLinkRoute($empresa, 'Perfil Usuario', 'fos_user_profile_edit');
          $vehicle = $this->addNavLinkRoute($menu, 'Vehiculos', 'Trackme_BackendBundle_Vehicle_list')->setExtra('icon', 'icon-road');
          $ot = $this->addNavLinkRoute($menu, 'Orden Transporte', 'Trackme_BackendBundle_Ot_list')->setExtra('icon', 'icon-road');
          $payments = $this->addNavLinkRoute($menu, 'Pagos', 'admin_business_payments')->setExtra('icon', 'icon-credit-card');
          $app = $this->addNavLinkUri($menu, 'Descarga Aplicacion', 'http://198.211.109.82/bundles/trackmebackend/apk/TrackMe-v1.06.apk')->setExtra('icon', 'icon-star');
        } elseif ($security->isGranted('ROLE_FULL')) {
          $empresa = $this->addDropdownMenu($menu, 'Empresa')->setExtra('icon', 'icon-home');
          $this->addNavLinkRoute($empresa, 'Usuarios', 'Trackme_BackendBundle_User_list');
          $this->addNavLinkRoute($empresa, 'Perfil Empresa', 'business_profile');
          $this->addNavLinkRoute($empresa, 'Perfil Usuario', 'fos_user_profile_edit');
          $vehicle = $this->addNavLinkRoute($menu, 'Vehiculos', 'Trackme_BackendBundle_Vehicle_list')->setExtra('icon', 'icon-road');
          $ot = $this->addNavLinkRoute($menu, 'Orden Transporte', 'Trackme_BackendBundle_Ot_list')->setExtra('icon', 'icon-road');
          $ticket = $this->addNavLinkRoute($menu, 'Soporte', 'Trackme_BackendBundle_Ticket_new')->setExtra('icon', 'icon-list');
          $payments = $this->addNavLinkRoute($menu, 'Pagos', 'admin_business_payments')->setExtra('icon', 'icon-credit-card');
          $app = $this->addNavLinkUri($menu, 'Descarga Aplicacion', 'http://198.211.109.82/bundles/trackmebackend/apk/TrackMe-v1.06.apk')->setExtra('icon', 'icon-star');
        } elseif ($security->isGranted('ROLE_USER')){
          $profile = $this->addNavLinkRoute($menu, 'Perfil', 'fos_user_profile_edit')->setExtra('icon', 'icon-user');
          $app = $this->addNavLinkUri($menu, 'Descarga Aplicacion', 'http://198.211.109.82/bundles/trackmebackend/apk/TrackMe-v1.06.apk')->setExtra('icon', 'icon-star');
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
