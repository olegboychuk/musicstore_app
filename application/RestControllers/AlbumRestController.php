<?php
require_once dirname (__FILE__). '/../core/Model/AlbumModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';
///??? REQUIRE ONCE TO AlbumController

class AlbumRestController extends AlbumController{
	public $model;

    /**
	/*protected function createAnswer
	/*	CREATE ANSWER FOR RESPONCE IN THE REST
	*/
	protected function createAnswer( $error,$answer,$code=200 ){
		$responce = array(
			"code"=$code;	
			);
		if( $error )
			$responce["error"]=$answer;
		else
			$responce["result"]=$answer;

		return $responce;
	}


    /**
	/* public function searchAlbums
	/* GET ALBUM FROM DB BY THE SEARCH AND GET ANSWER IF THIS HAPPEND
	*/
	public function searchAlbums( $str ){
		$album_details = parent::searchAlbums( $str );

		if( is_array( $album_details ) )
			return $this->createAnswer( 0, array("albums"=>$album_details) );
		elseif ( $album_details == NULL ) 
			return $this->createAnswer( 1,"empty result",402 )
		else
		   return $this->createAnswer( 1, "invalid search", 400 );
	}

    /**
	/* public function getDetailsAlbum
	/* GET ALBUM FROM DB AND GET ANSWER FOR RESPONCE
	*/
	public function getDetailsAlbum( $id ){
	     $album_details = parent::searchAlbums( $id );


		if( is_array( $album_details ) )
			return $this->createAnswer( 0, array( "album_details"=>$album_details ) );
		elseif ( $album_details == NULL )
		    return $this->createAnswer->(  1,"empty result",402 ); 

	}


}