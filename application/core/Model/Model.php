<?php
require_once dirname( __FILE__ ) . '/../lib/DB.class.php';
var_dump( __FILE__ );
class Model{
	protected $_db;
	 public function __construct(){
	 	$this->_db=DB::getInstance();
	}
}
// $db = new Model();

// var_dump($db);


?>

