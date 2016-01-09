<?php
require_once dirname (__FILE__).'/../../RestControllers/OrderRestController.php';
$order = new OrderRestController();

// $app->get('',function() use ( $order ){

// });

 $app->post('/order/',function() use ( $order,$app ){

    $data = json_decode($app->request->getBody(),true);
    //var_dump($data);
    $success = $order->writeOrder( $data );
    if ($success){
		echo 1;
	}else{
		echo 0;
	}
    //echo $order->writeOrder( $data );
 });

// $app->put('',function() use ( $order ){

// });

// $app->delete('',function() use ( $order ){

// });
