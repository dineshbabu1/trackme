<?php
$I = new ApiGuy($scenario);
$I->wantTo('Enviar coordenadas de posicion actual a la API');
$I->amHttpAuthenticated('api', 'api');
$I->haveHttpHeader("Content-Type", "application/json");
$I->sendPost('/position', array("lat" => -39, "lng" => 39));
$I->seeResponseIsJson();
$I->seeResponseContainsJson(array('status' => 'ok'));
$I->seeResponseCodeIs(200);