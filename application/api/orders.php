<?php
require_once dirname( __FILE__ ) . '/../REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType('application/json');

require_once dirname (__FILE__).'/../RestControllers/OrderRestController.php';
$order = new OrderRestController();

$app->get('',function() use ( $order ){

});

$app->post('',function() use ( $order ){

});

$app->put('',function() use ( $order ){

});

$app->delete('',function() use ( $order ){

});