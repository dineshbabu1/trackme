<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

use Trackme\BackendBundle\Entity\User;

class LoadUserData extends AbstractFixture implements OrderedFixtureInterface, FixtureInterface, ContainerAwareInterface
{
    private $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $userManager = $this->container->get('fos_user.user_manager');

        $user = $userManager->createUser();
        $user->setUsername('admin');
        $user->setName('admin');
        $user->setLastName('admin');
        $user->setPlainPassword('admin');
        $user->setEnabled(1);
        $user->setEmail('goncab380@hotmail.com');
        $user->addRole('ROLE_SUPER_ADMIN');
        $user->setEmailable(1);
        $user->addGroup($this->getReference('staff'));

        $userManager->updateUser($user);

        $user2 = $userManager->createUser();
        $user2->setUsername('api');
        $user2->setName('api');
        $user2->setLastName('api');
        $user2->setPlainPassword('api');
        $user2->setEnabled(1);
        $user2->setEmail('api@hotmail.com');
        $user2->addRole('ROLE_CLIENT');
        $user2->setEmailable(1);
        $user2->addGroup($this->getReference('cliente'));
        $user2->setBusiness($this->getReference('main-business'));

        $userManager->updateUser($user2);

        $manager->flush();
    }

    public function getOrder()
    {
        return 4;
    }

}
