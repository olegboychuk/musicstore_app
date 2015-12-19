  <?php
// require_once dirname (__FILE__). '/../core/Model/AlbumsModel.php';
// require_once dirname (__FILE__). '/../core/Controller/Controller.php';
require_once dirname (__FILE__). '/../Controllers/OrderController.php';

///??? REQUIRE ONCE TO AlbumController

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

		// if( is_array( $order_details ) )
		// 	return $this->createAnswer( 0, array("order"=>$order_details) );
		// elseif ( $order_details == NULL ) 
		// 	return $this->createAnswer( 1,"empty result",402 );
		// else
		//    return $this->createAnswer( 1, "invalid search", 400 );
	}
}
?>