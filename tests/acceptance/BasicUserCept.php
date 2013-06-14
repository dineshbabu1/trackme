<?php
$I = new WebGuy($scenario);
$I->wantTo('Ingresar en la aplicacion usando mi usuario y password');
$I->amOnPage('/');
$I->click('Ingresar');
$I->amOnPage('/login');
$I->see('Autenticación');
$I->see('Track Me!');
$I->wantTo('Llenar el formulario de ingreso');
$I->fillField('username', 'api');
$I->fillField('password', 'api');
$I->click('Entrar');
$I->amOnPage('/admin/business/dashboard');
$I->see('Track Me | Dashboard');