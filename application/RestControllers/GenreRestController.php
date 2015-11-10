
<?php
require_once dirname (__FILE__). '/../core/Model/GenresModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';
require_once dirname (__FILE__). '/../Controllers/GenreController.php';

class GenreRestController extends GenreController{
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
	/* public function getAllGenres
	/* GET Genres FROM DB AND GET ANSWER FOR RESPONCE
	*/
	public function getAllGenres( ){
		$genres = parent::getAllGenres( );

		if ( is_array( $genres ) ) {
			return $this->createAnswer( 0,array("genres"=>$genres) );
		}elseif ( $genres == NULL  ) {
			return $this->createAnswer( 1,"empty result",402 );
		}else
			return $this->createAnswer( 1,"invalid search",400 );
	}
}

?>
