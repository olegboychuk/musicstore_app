<?php 
class DB {
	private static $instance = NULL;

    public static function getInstance() {
		if ( !self::$instance ) {
			self::$instance = new mysqli("localhost", "root", "", "musicstore");
		}

		return self::$instance;
    }

    private function __construct() {}
    private function __clone(){}
}

?>