<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Form\Type\Mantention;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class EmbedType extends AbstractType
{

  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder->add('dateFrom', 'datepicker', array('required' => true, 'autoclose' => true, 'years' => array(0 => 2013, 1 => 2012, 2 => 2011, 3 => 2010, 4 => 2009, 5 => 2008, 6 => 2007, 7 => 2006, 8 => 2005, 9 => 2004, 10 => 2003, 11 => 2002, 12 => 2001, 13 => 2000,), 'label' => 'Desde'));
    $builder->add('dateTo', 'datepicker', array('required' => false, 'autoclose' => true, 'years' => array(0 => 2013, 1 => 2012, 2 => 2011, 3 => 2010, 4 => 2009, 5 => 2008, 6 => 2007, 7 => 2006, 8 => 2005, 9 => 2004, 10 => 2003, 11 => 2002, 12 => 2001, 13 => 2000,), 'label' => 'Hasta'));
    $builder->add('problem', 'textarea', array('required' => false, 'label' => 'Problema'));
    $builder->add('fixed', 'checkbox', array('required' => false, 'label' => 'Solucionado?'));
    $builder->add('solution', 'textarea', array('required' => false, 'label' => 'Solución'));
    ;
  }

  public function getName()
  {
    return 'embed_issue';
  }

  public function getDefaultOptions(array $options)
  {
    return array('data_class' => 'Trackme\BackendBundle\Entity\VehicleMantention');
  }

}
