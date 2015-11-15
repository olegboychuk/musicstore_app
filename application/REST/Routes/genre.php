
<?php

require_once dirname (__FILE__).'/../../RestControllers/GenreRestController.php';
$genre = new GenreRestController();
// var_dump($genre);

// $app->get('/albums/:id',function( $start ) use ( $album, $app ){
// 	// global $app;
// 	 $start = explode(':', $start);

// 	$al=$album->getAlbums( $start[1] );
	
// 	echo json_encode( $al ); 
// });

$app->get('/genres/',function() use ( $genre ){
	$genres=$genre->getAllGenres();
	
	echo json_encode( $genres ); 
});


// $app->post('',function() use ( $album ){

// });

// $app->put('',function() use ( $album ){

// });

// $app->delete('',function() use ( $album ){

// });
