
<?php

require_once dirname (__FILE__).'/../../RestControllers/AlbumRestController.php';
$album = new AlbumRestController();


$app->get('/albums/:start',function( $start ) use ( $album, $app ){
	// global $app;
	$start = explode(':', $start);

	$al=$album->getAlbums( $start[1] );
	
	echo json_encode( $al ); 
});

$app->get('/album/:id',function( $id ) use ( $album ){
	$album=$album->getDetailsAlbum( $id );
	
	echo json_encode( $album ); 
});

$app->post('',function() use ( $album ){

});

$app->put('',function() use ( $album ){

});

$app->delete('',function() use ( $album ){

});