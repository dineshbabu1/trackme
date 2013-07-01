<?php
 
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
                $sub = new Subscription();
                $sub->setBusiness($b);
                $sub->setAmount(($b->getPlan()->getPrice() * $uf) / $usd);
                $sub->setClpAmount(($b->getPlan()->getPrice() * $uf));
                $em->persist($sub);
                $em->flush();
            }
        }

        $output->writeln("Ejecucion correcta.");
 
        return 0;
    }
}