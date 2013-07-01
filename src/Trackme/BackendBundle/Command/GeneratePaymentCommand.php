<?php
 
namespace Trackme\BackendBundle\Command;
 
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
 
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

        $business = $this->getContainer()->get('doctrine')
                    ->getRepository("TrackmeBackendBundle:Business")
                    ->createQueryBuilder("u")
                    ->getQuery()
                    ->getResult();
 
        foreach ($business as $b) {
            if($b->getEnabled()){
                $sub = new Subscription();
                $sub->setAmount($b->getPlan()->get)
            }
        }
 
 
        return 0;
    }
}