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

namespace Trackme\BackendBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Trackme\BackendBundle\Entity\ClientState;

class LoadClientStateData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $b1 = new ClientState();
        $b1->setName('Básico');
        $b1->setCode('s');
        $manager->persist($b1);

        $b2 = new ClientState();
        $b2->setName('Business');
        $b2->setCode('m');
        $manager->persist($b2);

        $f = new ClientState();
        $f->setName('Full');
        $f->setCode('l');
        $manager->persist($f);

        $free = new ClientState();
        $free->setName('Trial');
        $free->setCode('t');
        $manager->persist($free);

        $manager->flush();
        $this->addReference('client-basic', $b1);
        $this->addReference('client-business', $b2);
        $this->addReference('client-full', $f);
        $this->addReference('client-trial', $free);
    }

    public function getOrder()
    {
        return 1;
    }
}
