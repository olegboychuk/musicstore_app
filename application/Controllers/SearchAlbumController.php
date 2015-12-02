<?php 
require_once dirname (__FILE__). '/../core/Model/SearchModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';

class SearchAlbumController extends Controller{
	public $model;

	public function __construct(){
		$this->model = new SearchModel();
	}


   /**
	/*public function searchAlbums
	/*	FETCH SPECIFIC ALBUMS BY SEARCH FROM DB
	*/
	public function searchAlbums( $str ){
		if ( strlen($str) < 3 ) 
			return false;
		
		$album_details = $this->model->searchAlbums( $str );
		if ( $album_details !== false ) 
			return $album_details;
		
		return false;
	}
}
?>