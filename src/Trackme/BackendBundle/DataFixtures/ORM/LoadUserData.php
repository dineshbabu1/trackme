<?php

namespace Trackme\BackendBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Trackme\BackendBundle\Entity\User;

class LoadUserData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {
           $user = new User();
           $user->setBusiness($this->getReference('main-business'));
           $user->setName('nombre_'.$i);
           $user->setLastName('apellido_'.$i);
           $user->setUsername('user_'.$i);
           $user->setEmail('email_'.$i.'@email.com');
           $user->setPlainPassword('1234');
           $user->setEmailable(true);
           $user->setEnabled(true);
           $manager->persist($user);
        }
        
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
    
    public function getOrder()
    {
        return 2;
    }
}