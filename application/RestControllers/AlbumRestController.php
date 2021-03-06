
<?php
// require_once dirname (__FILE__). '/../core/Model/AlbumsModel.php';
// require_once dirname (__FILE__). '/../core/Controller/Controller.php';
require_once dirname (__FILE__). '/../Controllers/AlbumController.php';


class AlbumRestController extends AlbumController{
	public $model;

    /**
	/*protected function createAnswer
	/*	CREATE ANSWER FOR RESPONCE IN THE REST
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
	/* public function getAlbums
	/* GET ALBUMs FROM DB AND GET ANSWER FOR RESPONCE
	*/
	public function getAlbums( $start ){
		$albums = parent::getAlbums( $start );
		
		if ( is_array( $albums ) && $albums != NULL ) {
			return $this->createAnswer( 0,array("albums"=>$albums) );
		}elseif ( $albums == NULL  ) {
			return $this->createAnswer( 1,"empty result",402 );
		}else
			return $this->createAnswer( 1,"invalid search",400 );
	}

    /**
	/* public function getAlbumsByGenre
	/* FETCH ALL ALBUMS FROM DB BY GENRE ID
	*/
	public function getAlbumsByGenre( $genreId ){
		$albums = parent::getAlbumsByGenre( $genreId );

		if ( is_array($albums) ) {
			return $this->createAnswer( 0,array("albums"=>$albums) );
		}elseif ( $albums == NULL  ) {
			return $this->createAnswer( 1,"empty result",402 );
		}else
			return $this->createAnswer( 1,"invalid search",400 );
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
		    return $this->createAnswer(  1,"empty result",402 ); 
	}

}

// $db = new AlbumRestController();
// var_dump($db);