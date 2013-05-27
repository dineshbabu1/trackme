<?php

namespace Trackme\BackendBundle\Command

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ClearCoordinatesCommand extends ContainerAwareCommand
{

    protected function configure()
    {
        $this
            ->setName('track:clear:coordinates')
            ->setDescription('Remove unused coordinates from database')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        
        /*$em = $this->getContainer()->get('doctrine')->getEntityManager();
        $em->getRepository('TrackmeBackendBundle:Coordinate')->;*/

        $output->writeln('ola ke ase');
    }
}