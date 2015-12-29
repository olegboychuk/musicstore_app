<?php 
require_once dirname (__FILE__). '/../core/Model/UserModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';

class UserController extends Controller{
	public $model;

	public function __construct(){
		$this->model = new UserModel();
	}

	/**
	/* public function regNewUser
	/*	FOR REGISTRATION NEW USER
	*/
	public function regNewUser( $userData ){

		$success = $this->model->regNewUser( $userData );

		if( is_array( $success ) ){
			return $success;
		}elseif ( $success ) {
			return true;
		}else{
			return false;
		}		
	}



	/**
	/* public function matchUser
	/*	FOR MATC EXIST USER
	*/
	public function matchUser( $data ){
		$success = $this->model->matchUser( $data );


		if ( $success ) 
           return true;
		
		return false;
	}

}

?>