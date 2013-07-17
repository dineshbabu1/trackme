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
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Trackme\BackendBundle\Entity\Group;

class LoadGroupData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $group = new Group('STAFF');
        $group->setRoles(array());
        $group->addRole('ROLE_SUPER_ADMIN');
        $manager->persist($group);

        $group1 = new Group('CLIENTE');
        $group1->setRoles(array());
        $group1->addRole('ROLE_ADMIN');
        $manager->persist($group1);

        $manager->flush();

        $this->addReference('staff', $group);
        $this->addReference('cliente', $group1);
    }

    public function getOrder()
    {
        return 3;
    }

}
