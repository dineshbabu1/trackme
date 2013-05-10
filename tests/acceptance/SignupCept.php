<?php
$I = new WebGuy($scenario);
$I->wantTo('Registrarme como empresa');
$I->amOnPage('/');
$I->see('Registro');
$I->click('Registro');
$I->see('Escoja su Plan');
// $I->wantTo('Llenar el formulario empresa');
// $I->fillField('form_name', 'empresa falsa');
// $I->fillField('form_email', 'email@empresa.cl');
// $I->fillField('form_phone', '987978878');
// $I->click('Aceptar');
// $I->see('usuario');
