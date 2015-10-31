<?php
require_once dirname( __FILE__ ) . '/../application/REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

// $app->contentType('application/json');


// require_once dirname (__FILE__).'/../application/RestControllers/AlbumRestController.php';

// $album = new AlbumRestController();

// $app->post('/',function() use ( $album ){

// });

// $app->get('/albums/:start',function( $start ) use ( $album ){
// 	$al=$album->getAlbums($start);
	
// 	echo json_encode( $al ); 
// });

// $app->post('',function() use ( $album ){

// });

// $app->put('',function() use ( $album ){

// });

// $app->delete('',function() use ( $album ){

// });

$app->run();