  <?php
// require_once dirname (__FILE__). '/../core/Model/AlbumsModel.php';
// require_once dirname (__FILE__). '/../core/Controller/Controller.php';
require_once dirname (__FILE__). '/../Controllers/SearchAlbumController.php';

///??? REQUIRE ONCE TO AlbumController

class SearchAlbumRestController extends SearchAlbumController{
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
	/* public function searchAlbums
	/* GET ALBUM FROM DB BY THE SEARCH AND GET ANSWER IF THIS HAPPEND
	*/
	public function searchAlbums( $str ){
		$album_details = parent::searchAlbums( $str );

		if( is_array( $album_details ) )
			return $this->createAnswer( 0, array("album"=>$album_details) );
		elseif ( $album_details == NULL ) 
			return $this->createAnswer( 1,"empty result",402 );
		else
		   return $this->createAnswer( 1, "invalid search", 400 );
	}
}
?>