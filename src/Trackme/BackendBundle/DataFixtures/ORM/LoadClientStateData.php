<?php

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
        
        $manager->flush();
        $this->addReference('client-basic', $b1);
        $this->addReference('client-business', $b2);
        $this->addReference('client-full', $f);
    }
    
    public function getOrder()
    {
        return 1;
    }
}