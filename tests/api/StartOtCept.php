<?php
$I = new ApiGuy($scenario);
$I->wantTo('Iniciar un nuevo OT (Orden de transporte)');
$I->amHttpAuthenticated('api', 'api');
$I->sendPost('/start');
$I->seeResponseIsJson();
$I->seeResponseContainsJson(array('status' => 'ok'));
$I->seeResponseCodeIs(200);
$I->wantTo('Tratar de iniciar otro OT y que el sistema lo impira');
$I->amHttpAuthenticated('api', 'api');
$I->sendPost('/start');
$I->seeResponseIsJson();
$I->seeResponseContainsJson(array('status' => 'ot active'));
$I->seeResponseCodeIs(200);
$I->wantTo('Terminar un OT activo (Orden de transporte)');
$I->amHttpAuthenticated('api', 'api');
$I->sendPost('/finish');
$I->seeResponseIsJson();
$I->seeResponseContainsJson(array('status' => 'ok'));
$I->seeResponseCodeIs(200);
$I->wantTo('Tratar de terminar una ot inexistente');
$I->amHttpAuthenticated('api', 'api');
$I->sendPost('/finish');
$I->seeResponseIsJson();
$I->seeResponseContainsJson(array('status' => 'sin ot activa'));
$I->seeResponseCodeIs(200);