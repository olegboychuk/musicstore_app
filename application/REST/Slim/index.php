<?php
// Get the Slim framework
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

// Create new object of Slim
$app = new \Slim\Slim();

// Set the HTTP Header of the Content-Type (MIME Type) to be JSON
//$app->contentType( 'application/json' );




require_once dirname( __FILE__ ) . '/rest/students.php';
require_once dirname( __FILE__ ) . '/rest/authentication.php';


$app->get('/home/:id', function ($id) use ($app) {
	$app->render('home.php', array('id' => $id));
});

$app->run();