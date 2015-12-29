
<?php
require_once dirname( __FILE__ ) . '/../application/REST/Slim/Slim.php';
//HELLO
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

// Set the HTTP Header of the Content-Type (MIME Type) to be JSON
$app->contentType( 'application/json' );

//-------------authentication
/**
 * function authentication
 * check if $_SESSION ATTEND
 * @param () () about this param
 * @return () ()
 */
function authentication(){
	//var_dump($app);
	$app = \Slim\Slim::getInstance();
    if (!isset($_SESSION['login']) || !$_SESSION['login']){
 		echo json_encode( array( "error"=>"no session" ) );
        $app->halt( 403,json_encode( array( "error"=>"no session" )));
	}
}



require_once dirname( __FILE__ ) . '/../application/REST/Routes/genre.php';
require_once dirname( __FILE__ ) . '/../application/REST/Routes/album.php';
require_once dirname( __FILE__ ) . '/../application/REST/Routes/search.php';
require_once dirname( __FILE__ ) . '/../application/REST/Routes/user.php';
// var_dump($app);
$app->run();