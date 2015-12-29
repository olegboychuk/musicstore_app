<?php
require_once dirname( __FILE__ ) . '/../application/REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType('application/json');

require_once dirname (__FILE__).'/../RestControllers/OrderRestController.php';
$order = new OrderRestController();

$app->get('',function() use ( $order ){

});

 $app->post('api/order/','authentication',function() use ( $order,$app ){

    $data = json_decode($app->request->getBody(),true);
    echo $order->writeOrder($data);
 });

// $app->put('',function() use ( $order ){

// });

// $app->delete('',function() use ( $order ){

// });