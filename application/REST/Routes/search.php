<?php

require_once dirname (__FILE__).'/../../RestControllers/SearchAlbumRestController.php';
$album = new SearchAlbumRestController();


$app->get('/search/:str',function( $str ) use ( $album, $app ){

	$str = explode(':', $str);
		// var_dump($str[1]);
	$al=$album->searchAlbums( $str[1] );
	
	echo json_encode( $al ); 
});