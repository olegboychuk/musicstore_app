<?php
require_once dirname( __FILE__ ) . '/../application/REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType('application/json');

require_once dirname (__FILE__).'/../RestControllers/UserRestController.php';
$user = new UserRestController();

$app->get('',function() use ( $user ){

});

$app->post('',function() use ( $user ){

});

$app->put('',function() use ( $user ){

});

$app->delete('',function() use ( $user ){

});