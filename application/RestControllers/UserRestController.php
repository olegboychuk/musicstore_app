<?php
require_once dirname(__FILE__).'/../Controllers/UserController.php';

class UserRestController extends UserController{
	public $model;

	 /**
	/*protected function createAnswer
	/*	CREATE ANSWER FOR RESPONCE 
	*/
	protected function createAnswer( $error,$answer,$code=200 ){
		$responce = array(
			"code" => $code,	
			);
		if( $error )
			$responce["error"]=$answer;
		else
			$responce["result"]=$answer;

		return $responce;
	}


    /**
	/* public function regNewUser
	/* GET ARRAY 
	*/
	public function regNewUser( $data ){

		$success = parent::regNewUser( $data );
	
		if( is_array( $success ) ){
		 	return $this->createAnswer( 1,"Username or email already exist",403 );
		}elseif ( $success ){
			return $this->createAnswer( 0,"Congratulation you got permission" );
		}else{
		    return $this->createAnswer( 1,"invalid query",402 );
		}
	}



    /**
	/* public function matchUser
	/* GET ARRAY 
	*/
	public function matchUser( $data ){
		$success = parent::matchUser( $data );

		if ( $success ) {
			return $this->createAnswer( 0, array("user"=>$_SESSION,"msg"=>"Do you have access"));
		}else{
			return $this->createAnswer( 1,"Something went wrong",403 );
		}
	}


  /**
	/* public function logOut
	/* GET ARRAY 
	*/
	public function logOut(){
		$success = parent::logOut();

		if ( !$_SESSION['login'] ) {
			return $this->createAnswer( 0,"log out cuccess");
		}else{
			return $this->createAnswer( 1,"something went wrong ",403);
		}
		
	}

}