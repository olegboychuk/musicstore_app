<?php 
require_once dirname (__FILE__). '/../core/Model/OrderModel.php';
require_once dirname (__FILE__). '/../core/Controller/Controller.php';

class OrderController extends Controller{
	public $model;

	public function __construct(){
		$this->model = new OrderModel();
	}

   /**
	/*public function writeOrder
	/*	WRITE
	*/
	public function writeOrder( $data ){
		// if () 
		// 	return false;
		
		$order_details = $this->model->writeOrder( $data );
		if ( $order_details !== false ) 
			return $order_details;
		
		return false;
	}
}
?>