
<?php
require_once dirname (__FILE__).'/../../RestControllers/GenreRestController.php';
$genre = new GenreRestController();
// var_dump($genre);

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
