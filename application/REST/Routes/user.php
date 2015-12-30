 <?php

require_once dirname (__FILE__).'/../../RestControllers/UserRestController.php';

$user = new UserRestController();


$app->post('/registruser/',function() use ( $user,$app ){
	
	$data = json_decode($app->request->getBody(),true);
	
	$success = $user->regNewUser($data);
	 
	echo json_encode( $success );
});


$app->post('/login/',function() use ( $user,$app ){
	
	$data = json_decode($app->request->getBody(),true);
	 
	$success = $user->matchUser($data);

		if ( $success ) { 	
	 	  authentication();
	 	  echo json_encode( $success );
		}
});



// $app->get('',function() use ( $user ){

// });
// $app->put('',function() use ( $user ){

// });

// $app->delete('',function() use ( $user ){

// });

//  $user = new UserRestController();
//  $json = ("firstName");
//  // $data = json_decode($json);
// $user->regNewUser( $json);
//  var_dump($user);
 ?>