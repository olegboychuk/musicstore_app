<?php 
require_once dirname (__FILE__). '/../core/Model/AlbumsModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';

class AlbumController extends Controller{
	public $model;

	public function __construct(){
		$this->model = new AlbumModel();
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

	/**
	/*public function getAlbums
	/*	FETCH ALL ALBUMS FROM DB
	*/
	public function getAlbums( $start ){
		$albums = $this->model->getAlbums( $start );
		
		if ($albums !== NULL) 
			return $albums;
		else
			return false;	
	}


     /**
	/*public function getDetailsAlbum
	/*	FETCH DETAILS OF ALBUM FROM DB
	*/
	public function getDetailsAlbum( $id ){
		$album_details = $this->model->getDetailsAlbum( $id );
		
		if( $album_details !== NULL )
			return $album_details;
		else
			return false;
	}
}
// $db = new AlbumController();
// var_dump($db);
?>