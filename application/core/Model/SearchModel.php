
<?php 
require_once dirname(__FILE__).'/Model.php';

class SearchModel extends Model{

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
		$result = $this->_db->query( "SELECT * FROM albums AS a join images_to_albums as ia ON a.album_id = ia.image_id JOIN images as i ON ia.image_id = i.image_id WHERE a.album_artist like '%$str%' " );
		
		//echo "SELECT * FROM albums AS a WHERE a.album_name like '$str' ";
		$album_details = array();
		if ( $result->num_rows>0 ){
			while ( $row = $result->fetch_assoc() ) 
			$album_details[]=$row;
	        return $album_details;
	    }
	    
	}
}
?>