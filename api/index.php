<?php
require_once dirname( __FILE__ ) . '/../application/REST/Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType('application/json');

require_once dirname( __FILE__ ) . '/user.php';
require_once dirname( __FILE__ ) . '/album.php';