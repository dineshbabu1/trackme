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
use Trackme\BackendBundle\Entity\User;

class LoadUserData extends AbstractFixture implements OrderedFixtureInterface {

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager) {
        
        $user = new User();
        $user->setBusiness($this->getReference('main-business'));
        $user->setName('Usuario');
        $user->setLastName('Basico');
        $user->setUsername('basico');
        $user->setEmail('basico@email.com');
        $user->setPlainPassword('1234');
        $user->setEmailable(true);
        $user->setEnabled(true);
        $user->addRole('ROLE_BASIC');
        $manager->persist($user);

        $adminuser = new User();
        $adminuser->setName('admin');
        $adminuser->setLastName('admin');
        $adminuser->setUsername('admin');
        $adminuser->setEmail('admin');
        $adminuser->setPlainPassword('admin');
        $adminuser->setEmailable(true);
        $adminuser->setEnabled(true);
        $adminuser->addRole('ROLE_SUPER_ADMIN');
        $manager->persist($adminuser);

        $manager->flush();
    }

    public function getOrder() {
        return 3;
    }

}