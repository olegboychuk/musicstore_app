<?php
require_once dirname( __FILE__ ) . '/../REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType('application/json');

require_once dirname (__FILE__).'/../RestControllers/AlbumRestController.php';
$album = new AlbumRestController();

$app->get('',function() use ( $album ){

});

$app->post('',function() use ( $album ){

});

$app->put('',function() use ( $album ){

});

$app->delete('',function() use ( $album ){

});