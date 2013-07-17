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
use Trackme\BackendBundle\Entity\Business;
use Trackme\BackendBundle\Entity\Plan;

class LoadBusinessData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        
        $trial = new Plan();
        $trial->setName('Trial');
        $trial->setPrice(0);
        $trial->setRefreshTime(60);
        $trial->setFeatured(false);
        $trial->setUsersLimit(3);
        $manager->persist($trial);
        
        $basico = new Plan();
        $basico->setName('Básico');
        $basico->setPrice(1.5);
        $basico->setFeatured(false);
        $basico->setRefreshTime(45);
        $basico->setUsersLimit(5);
        $manager->persist($basico);
        
        $business = new Plan();
        $business->setName('Business');
        $business->setPrice(3);
        $business->setFeatured(true);
        $business->setRefreshTime(30);
        $business->setUsersLimit(15);
        $manager->persist($business);
        
        $full = new Plan();
        $full->setName('Full');
        $full->setPrice(4.5);
        $full->setFeatured(false);
        $full->setRefreshTime(15);
        $full->setUsersLimit(30);
        $manager->persist($full);
        
        $b = new Business();
        $b->setName('Elfic Ticio');
        $b->setEmail('elfic@ticio.com');
        $b->setAddress('almirante barroso 87, santiago');
        $b->setPlan($full);
        $b->setEnabled(true);
        $b->setPhone(mt_rand(10000000, 99999999));
        $b->setState($this->getReference('client-basic'));
        $manager->persist($b);
        $manager->flush();

        $this->addReference('main-business', $b);
    }

    public function getOrder()
    {
        return 2;
    }
}
