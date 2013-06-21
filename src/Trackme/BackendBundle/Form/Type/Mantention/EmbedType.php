<?php

/*
 * Copyright 2013 Gonzalo Moreno <goncab380@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Trackme\BackendBundle\Form\Type\Mantention;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class EmbedType extends AbstractType
{

  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder->add('dateFrom', 'datepicker', array('required' => false, 'autoclose' => true, 'years' => array(0 => 2013, 1 => 2012, 2 => 2011, 3 => 2010, 4 => 2009, 5 => 2008, 6 => 2007, 7 => 2006, 8 => 2005, 9 => 2004, 10 => 2003, 11 => 2002, 12 => 2001, 13 => 2000,), 'label' => 'Desde'));
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
