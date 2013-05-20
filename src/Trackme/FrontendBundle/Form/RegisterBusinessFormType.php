<?php

namespace Trackme\FrontendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class RegisterBusinessFormType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        switch ($options['flowStep']) {
            case 1:
                $builder->add('name', 'text', array('label' => 'Nombre Empresa'))
                ->add('email', 'email')
                ->add('phone', 'number', array('label' => 'Teléfono'));
                break;
            case 2:
                $builder->add('users','collection',array(
                    'allow_add' => true,
                    'allow_delete' => false,
                    'by_reference' => false,
                    'type' =>  new \FOS\UserBundle\Form\Type\RegistrationFormType($builder), 
                    'options' =>   array(    'label' => 'Nuevo Usuario',    'data_class' => 'Trackme\\BackendBundle\\Entity\\User' ),
                    'label' => 'Usuario'));
                break;
        }
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'flowStep' => 1,
            'data_class' => 'Trackme\BackendBundle\Entity\Business', // should point to your user entity
        ));
    }

    public function getName() {
        return 'registerBusines';
    }

}