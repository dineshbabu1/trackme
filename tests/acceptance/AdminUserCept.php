<?php
$I = new WebGuy($scenario);
$I->wantTo('Ingresar en mi aplicacion como administrador usando mi usuario y password');
$I->amOnPage('/');
$I->click('Ingresar');
$I->see('Autenticación');
$I->see('Track Me!');
$I->wantTo('Llenar el formulario de ingreso');
$I->fillField('username', 'admin');
$I->fillField('password', 'admin');
$I->click('Entrar');
$I->amOnPage('/admin/dashboard');
$I->dontSee("Calcular Viaje");
