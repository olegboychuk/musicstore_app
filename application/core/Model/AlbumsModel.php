
<?php 
require_once dirname(__FILE__).'/Model.php';

class AlbumModel extends Model{
	
	/**
	/*public function __construct
	/*	hold connection  with DB
	*/
	public function __construct(){
		parent::__construct();
	}

	/**
	/*public function searchAlbums
	/*	FETCH SPECIFIC ALBUMS BY SEARCH FROM DB
	*/
	public function searchAlbums( $str ){
		$result = $this->_db->query( "SELECT * FROM albums AS a WHERE a.album_name like '%$str%' " );
		
		$album_details = array();
		if ( $result->num_rows>0 ){
			while ( $row = $result->fetch_assoc() ) 
				$album_details[]=$row;
				return = $album_details;		
	    }
	}

	/**
	/*public function getALLAlbums
	/*	FETCH ALL ALBUMS FROM DB
	*/
	public function getALLAlbums(){
		$result = $this->_db->query("SELECT * FROM albums");

		if(result){
			$albums=array();
			while ($row = $result->fetch_assoc()) 
			    $albums[]=$row;
			
			return $albums;
		}
	}

     /**
	/*public function getGroupAlbums
	/*	FETCH GROUP ALBUMS FOR FIRST GET FROM DB????
	*/
	public function getGroupAlbums(){
		$result=$this->_db->query("SELECT * FROM albums ORDER BY album_id DESC 23 LIMIT");

		if(result){
			$albums=array();
			while ($row = $result->fetch_assoc()) 
			    $albums[]=$row;
			
			return $albums;
		}
	

	/**
	/*public function getDetailsAlbum
	/*	FETCH DETAILS OF ALBUM FROM DB
	*/
	public function getDetailsAlbum( $id ){

		$result = $this->_db->query( " SELECT * FROM albums WHERE album_id = $id ");
			
		if(result){
			$album_details=array();
			while ($row = $result->fetch_assoc()) 
			    $albums[]=$row;
			
			return $album_details;
		}
	}

	/**
	/*public function insertAlbum
	/*	INSERT NEW ALBUM TO DB
	*/
	public function insertAlbum( $album ){
		$succes = $this->_db->query ("INSERT INTO albums(album_name,album_artist,album_duration,album_release_year,album_description,album_long_description,album_created,album_price,album_stock ) VALUES ( '".$album['']."') ");
		$album_id = $this->_db->insert_id;
		return $album_id
		//$succes = $this->_db->query("INSERT INTO genre_to_albums()  VALUES( '".."' ) ")
	}

	/**
	/*public function updateAlbum
	/*	EDIT DETAILS OF ALBUM AND IMAGE??? AND GENRE???
	*/
	public function updateAlbum( $album ){
		$succes = $this->_db->query( "UPDATE albums AS a,  SET a.album_name = '".$album['']."', a.album_artist = '".$album['album_duration']."', a.album_release_year = '".$album['album_description']."', a.album_price = '".$album['album_price']."', a.album_stock = '".$album['album_stock']."' ");
	}

	/**
	/*public function deleteAlbum
	/*	DELETE ALBUM
	*/
	public function deleteAlbum($albumId){
		$succes = $this->_db->query( " DELETE FROM albums WHERE album_id = '$albumId' " );
		if ($succes) {
			return true;
		}
	}

}
$db = new AlbumModel();
var_dump($db);

?>