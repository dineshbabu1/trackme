<?php

namespace Trackme\BackendBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Trackme\BackendBundle\Entity\Business;

class LoadBusinessData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        
        $b = new Business();
        $b->setName('Elfic Ticio');
        $b->setEmail('elfic@ticio.com');
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