<?php
session_start();
require_once dirname(__FILE__).'/Model.php';

class UserModel extends Model{

	/**
	/*public function __construct
	/*	hold connection  with DB
	*/
	public function __construct(){
		parent::__construct();
	}

	 /**
	 /*  public method regNewUser
	 /* check if user alredy exist if not Create the new user
	 /* @param ( array ) ( $details ) about this param  the array come from $_POST
	 /* @return ( boolean  or  array) ( $details )
	 */
	public function regNewUser( $details ){

		$current_user = $this->matchUser( $details );

		if ( !$current_user ) {
			$result = $this->_db->query( " INSERT INTO users ( user_firstname,user_lastname,user_email,user_password ) VALUES( '".$details['firstName']."','".$details['lastName']."','".$details['email']."','".md5( $details['pass'] )."') ");
		
			if ( $result ){
				// $result=$this->getUserforSessionById( $id );//object get details of the user
				return true;
			}else{
				return false;
			}
		}else{
			return $details;
		}
					
	}

	//----------------LOGIN---------------
 	/**
 	 /* METHOD MATCH USER
 	 /* Check if user attend in DB and call to function createSession()
 	 /* @param ( string ) ( $email,$password ) about this param  the array come from $_POST
 	 /* @return ( array ) ( $_SESSION )
 	 */	
 	public function matchUser( $user_details ){
 		
 		$email = $user_details['email'];
 		$password = md5($user_details['pass']);
 		 
 		$result = $this->_db->query( "SELECT user_id, user_email,user_password FROM users WHERE user_email = '$email' AND user_password = '$password' " );
  		if ( $result -> num_rows > 0 ){
  			$row = $result->fetch_assoc();
  			$user_id = $row[user_id];

  			$this->logOut();
  			$session = $this->createSession( $user_id );
  				if ( session ) {
  					//var_dump(session);
  				    return true;
  				}
  			return false;
  		}
  		return false;
 	}
 
//----------------SESSION--------
 	/**
 	 /* METHOD createSession
 	 /* create $_SESSION 
 	 /* @param ( object ) ( $result ) about this param 
 	 /* @return ( // ) ( $_SESSION )
 	 */
 	private function createSession( $user_id ){			
 		if ( $user_id ) 
 			$_SESSION['user_id'] = $user_id;
 			$_SESSION['login'] = true;
   		    //print_r($_SESSION);
 		return true;
    }



//----------------DELETE SESSION--------
 	/**
 	 /* method delete $_SESSION
 	 /* delete $_SESSION
 	 /* @param (  ) (  ) about this param  
 	 /* @return (  ) ( $_SESSION )
 	 */
 	private function logOut(){
	    $_SESSION['user_id'] = "";
	    $_SESSION['login'] = false;
 		return session_destroy();
 	}
	
 }

