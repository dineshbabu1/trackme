<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Command;
 
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Trackme\BackendBundle\Entity\Subscription;
 
class GeneratePaymentCommand extends ContainerAwareCommand
{
 
    protected function configure()
    {
        parent::configure();
 
        $this->setName('trackme:generate-payment')
             ->setDescription('Generate Payments for clients.');
    }
 
    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $uf = $this->getContainer()->get('trackme.payment.controller')->ufAction()->getContent();
        $usd = $this->getContainer()->get('trackme.payment.controller')->dolarAction()->getContent();
        $em = $this->getContainer()->get('doctrine.orm.entity_manager');
        $business = $this->getContainer()->get('doctrine')
                    ->getRepository("TrackmeBackendBundle:Business")
                    ->createQueryBuilder("u")
                    ->getQuery()
                    ->getResult();
 
        foreach ($business as $b) {
            if($b->getEnabled()){
                foreach ($b->getSubscriptions() as $s) {
                    if($s->getDatePayment()->format('Y-m-d H:i:s') == date('Y-m-01 00:00:00')){
                        $has_payment = true;
                    }
                }

                if(!isset($has_payment)){
                   $sub = new Subscription();
                   $sub->setBusiness($b);
                   $sub->setAmount(($b->getPlan()->getPrice() * $uf) / $usd);
                   $sub->setClpAmount(($b->getPlan()->getPrice() * $uf));
                   $sub->setDatePayment(\DateTime::createFromFormat('Y-m-d H:i:s', date('Y-m-01 00:00:00')));

                   $em->persist($sub);
                   $em->flush(); 
                }
                
            }
        }

        $output->writeln("Ejecucion correcta.");
 
        return 0;
    }
}