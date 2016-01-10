  <?php
// require_once dirname (__FILE__). '/../core/Model/AlbumsModel.php';
// require_once dirname (__FILE__). '/../core/Controller/Controller.php';
require_once dirname (__FILE__). '/../Controllers/OrderController.php';


class OrderRestController extends OrderController{
	public $model;

    /**
	/*protected function createAnswer
	/*	CREATE ANSWER FOR RESPONCE 
	*/
	protected function createAnswer( $error,$answer,$code=200 ){
		$responce = array(
			"code" => $code,	
			);
		if( $error )
			$responce["error"]=$answer;
		else
			$responce["result"]=$answer;

		return $responce;
	}


    /**
	/* public function writeOrder
	/* GET ARRAY 
	*/
	public function writeOrder( $data ){
		$order_details = parent::writeOrder( $data );
		//print_r($order_details);
		return $order_details;
		// if ( $order_details ) {
		// 	// 
		// 	$this->createAnswer(0,"Order created");
		// }else{
		// 	$this->createAnswer(1,"some mistake",401);
		// }

	}
}
?>