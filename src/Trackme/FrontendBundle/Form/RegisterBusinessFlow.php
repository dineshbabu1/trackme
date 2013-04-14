<?php

namespace Trackme\FrontendBundle\Form;

use Craue\FormFlowBundle\Form\FormFlow;

class RegisterBusinessFlow extends FormFlow {

	protected $maxSteps = 2;

	protected $allowDynamicStepNavigation = true;

	protected function loadStepDescriptions() {
		return array(
			'Empresa',
			'Usuario'
			);
	}
}