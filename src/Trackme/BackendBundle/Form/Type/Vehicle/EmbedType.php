<?php

namespace Trackme\BackendBundle\Form\Type\Vehicle;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use JMS\SecurityExtraBundle\Security\Authorization\Expression\Expression;

class EmbedType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {        
        $builder
            ->add('problem', 'text')
        ;
    }

    public function getName()
    {
        return 'issue';
    }

    public function getDefaultOptions(array $options){
        return array('data_class' => 'Trackme\BackendBundle\Entity\VehicleMantention');
    }

}
