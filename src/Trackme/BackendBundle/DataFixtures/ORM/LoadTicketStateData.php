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
use Trackme\BackendBundle\Entity\TicketState;

class LoadTicketStateData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {

        $new = new TicketState();
        $new->setName('Nuevo');
        $manager->persist($new);
        $open = new TicketState();
        $open->setName('Abierto');
        $manager->persist($open);
        $closed = new TicketState();
        $closed->setName('Cerrado');
        $manager->persist($closed);

        $manager->flush();

    }

    public function getOrder()
    {
        return 5;
    }
}
