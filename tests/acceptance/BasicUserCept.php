<?php
$I = new WebGuy($scenario);
$I->wantTo('Ingresar en la aplicacion usando mi usuario y password');
$I->amOnPage('/');
$I->click('Ingresar');
$I->see('Autenticación');
$I->see('Track Me!');
$I->wantTo('Llenar el formulario de ingreso');
$I->fillField('username', 'basico');
$I->fillField('password', '1234');
$I->click('Entrar');
$I->see('Track Me | Dashboard');
$I->see("Calcular Viaje");
$I->wantTo("Calcular un viaje ingresando origen y destino");
// $I->submitForm('#form_calcular', array('form_origen' => 'santiago', 'form_destino' => 'maipu', 'form_precio_combustible' => 800, 'form_kilometros_por_litro' => 9));
$I->fillField('form_origen', 'santiago');
$I->fillField('form_destino', 'maipu');
$I->fillField('form_precio_combustible', '800');
$I->fillField('form_kilometros_por_litro', '10');
$I->click('Calcular');
$I->see("Resultados");
$I->click('Resultados', '#accordion-toggle');
// $I->see('Tiempo estimado:');
// $I->see('Distancia aproximada:');
// $I->see('Costo estimado:');