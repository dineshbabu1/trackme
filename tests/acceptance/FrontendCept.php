<?php
$I = new WebGuy($scenario);
$I->wantTo('Visitar la pagina de inicio');
$I->amOnPage('/');
$I->see('Track me');
$I->see("Best fleet manager ever");
