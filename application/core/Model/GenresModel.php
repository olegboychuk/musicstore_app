
<?php
require_once dirname(__FILE__).'/Model.php';

class GenreModel extends Model{

    /**
    /*public function __construct
    /*	HOLD CONNECTION WITH DB
     */
    public function __construct(){
        parent::__construct();
    }

    /**
    /*public function getAllGenres
    /*	FETCH ALL GENRES FROM DB
     */
    public function getAllGenres(){
        $query = $this->_db->query("SELECT * FROM genres ");

        $results = $this->_db->query($query);
        $genres = array();

        if($query){

            while ($row = $results->fetch_assoc())
                $genres[] = $row;

        }

        return $genres;
    }

    /**
    /*public function getGenre
    /*	FETCH 1 GENRE FROM DB
     */
    public function getGenre( $genre_id ){
        $query = $this->_db->query("SELECT 1 FROM genres WHERE genre_id = {$genre_id}");

        $result = $this->_db->query($query);

        if($query && $row = $result->fetch_assoc()){

            $genre = $row;

        }

        return $genre;
    }

    /**
    /*public function insertGenre
    /*	INSERT NEW GENRE TO DB
     */
    public function insertGenre( $genre ){
        return $this->_db->query ( "INSERT INTO genres(genre_parent_id,genre_name ) VALUES ( '".$genre['']."') ");
    }

    /**
    /*public function updateGenre
    /*	EDIT GENRE_NAME OF GENRE
     */
    public function updateGenre( $genre, $genre_id ){
        return $this->_db->query( "UPDATE genres SET genre_name = '".$genre['']."' WHERE genre_id = {$genre_id}");
    }

    /**
    /*public function deleteGenre
    /*	DELETE GENRE
     */
    public function deleteGenre($genre_id){
        return $this->_db->query( " DELETE FROM genres WHERE genre_id = {$genre_id} " );
    }

}

?>