
<?php

require_once dirname (__FILE__).'/../../RestControllers/AlbumRestController.php';
$album = new AlbumRestController();

// $al=$album->getAlbums( 2 );
// var_dump($al);

$app->get('/albums/:start',function( $start ) use ( $album, $app ){
	// global $app;
	 $start = explode(':', $start);

	$al=$album->getAlbums( $start[1] );
	
	echo json_encode( $al ); 
});

$app->get('/albums/',function(  ) use ( $album ){
	$al=$album->getAl();
   // var_dump($al);	
	echo json_encode( $al ); 
});

$app->post('',function() use ( $album ){

});

$app->put('',function() use ( $album ){

});

$app->delete('',function() use ( $album ){

});