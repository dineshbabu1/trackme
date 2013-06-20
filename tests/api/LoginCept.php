<?php
$I = new ApiGuy($scenario);
$I->wantTo('Chequear si un usuario existe o no en la base de datos');
$I->amGoingTo('Autenticarme con HTTP erroneamente');
$I->amHttpAuthenticated('false', 'falso');
$I->sendPost('/login');
$I->seeResponseIsJson();
$I->seeResponseCodeIs(401);

$I->amGoingTo('Autenticarme con HTTP correctamente');
$I->amHttpAuthenticated('api', 'api');
$I->sendPost('/login');
$I->seeResponseIsJson();
$I->seeResponseCodeIs(200);