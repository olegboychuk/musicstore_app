
<?php
require_once dirname( __FILE__ ) . '/../application/REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

// Set the HTTP Header of the Content-Type (MIME Type) to be JSON
$app->contentType( 'application/json' );

// require_once dirname( __FILE__ ) . '/../application/REST/Routes/user.php';
require_once dirname( __FILE__ ) . '/../application/REST/Routes/album.php';
// var_dump($app);
$app->run();