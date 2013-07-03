<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Form\Type\Vehicle;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

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

    public function getDefaultOptions(array $options)
    {
        return array('data_class' => 'Trackme\BackendBundle\Entity\VehicleMantention');
    }

}
