<?php
require_once dirname(__FILE__).'/Model.php';

class OrderModel extends Model{

    /**
    /*public function __construct
    /*	HOLD CONNECTION WITH DB
     */
    public function __construct(){
        parent::__construct();
    }

    public function writeOrder($data){
    	$success = $this->_db->query("INSERT INTO orders as or")
    }
?>