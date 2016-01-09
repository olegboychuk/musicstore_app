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

    public function writeOrder( $details ){
        
         var_dump($details);
    	$success = $this->_db->query(" INSERT INTO orders ( order_id,user_id, order_created, order_shipping_address, order_shipping_city, order_shipping_zipcode, order_payment_method, order_total ) VALUES (  '".$details['user_id']."',CURRENT_TIMESTAMP,'".$details['order_shipping_address']."','".$details['order_shipping_city']."','".$details['order_shipping_zipcode']."','".$details['order_shipping_phone']."','".$details['order_payment_method']."','".$details['order_total']."')  ) ");
        echo " INSERT INTO orders ( order_id,user_id, order_created, order_shipping_address, order_shipping_city, order_shipping_zipcode, order_payment_method, order_total ) VALUES (  '".$details['user_id']."',CURRENT_TIMESTAMP,'".$details['order_shipping_address']."','".$details['order_shipping_city']."','".$details['order_shipping_zipcode']."','".$details['order_shipping_phone']."','".$details['order_payment_method']."','".$details['order_total']."') ";

        $id = $this->_db->insert_id;
        $result = $this->_db->query(" INSERT INTO orders_to_albums( order_id,album_id ) VALUES ($id,'".$details['album_id']."') ");
       
        if ( $result ) {
            return true;
        }
    }
}
?>