<?php

namespace Trackme\FrontendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class RegisterBusinessFormType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        switch ($options['flowStep']) {
            case 1:
                $builder->add('name', 'text', array('label' => 'Nombre'))
                ->add('email', 'email');
                break;
            case 2:
                $builder->add('name','text', array('label' => 'Nombre'))
                ->add('last_name','text', array('label' => 'Apellido'))
                ->add('username','text', array('label' => 'Usuario'))
                ->add('plain_password','repeated', array('type' => 'password', 'first_name' => 'Password', 'second_name' => 'Confirmar_Password','invalid_message' => 'Las contraseñas deben coincidir.', 'label' => 'Password'));
                break;
            
        }
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'flowStep' => 1,
            'data_class' => 'Trackme\BackendBundle\Entity\User', // should point to your user entity
        ));
    }

    public function getName() {
        return 'registerBusines';
    }

}