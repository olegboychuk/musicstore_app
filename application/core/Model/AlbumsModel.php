
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
	/*public function getALLAlbums
	/*	FETCH ALL ALBUMS FROM DB
	*/
	public function getALLAlbums(){
		$result=$this->_db->query("SELECT * FROM albums");

		if(result){
			$albums=array();
			while ($row = $result->fetch_assoc()) 
			    $albums[]=$row;
			
			return $albums;
		}
	}

	/**
	/*public function getDetailsAlbum
	/*	FETCH DETAILS OF ALBUM FROM DB
	*/
	public function getDetailsAlbum($id){
		
		$result = $this->_db->query(" SELECT * FROM albums WHERE album_id = $id ");
			
		if(result){
			$album_details=array();
			while ($row = $result->fetch_assoc()) 
			    $albums[]=$row;
			
			return $album_details;
		}
	}


}
$db = new AlbumModel();
var_dump($db);

?>