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
       
        foreach ($details as $key => $value) {
            var_dump($value );
            print_r($value['user_id']);
        	$success = $this->_db->query(" INSERT INTO orders ( order_id,user_id, order_created, order_shipping_address, order_shipping_city, order_shipping_zipcode, order_payment_method, order_total ) VALUES (  '".$value['user_id']."',CURRENT_TIMESTAMP,'".$value['order_shipping_address']."','".$value['order_shipping_city']."','".$value['order_shipping_zipcode']."','".$value['order_shipping_phone']."','".$value['order_payment_method']."','".$value['order_total']."')  ) ");
            echo " INSERT INTO orders ( order_id,user_id, order_created, order_shipping_address, order_shipping_city, order_shipping_zipcode, order_payment_method, order_total ) VALUES (  '".$value['user_id']."',CURRENT_TIMESTAMP,'".$value['order_shipping_address']."','".$value['order_shipping_city']."','".$value['order_shipping_zipcode']."','".$value['order_shipping_phone']."','".$value['order_payment_method']."','".$value['order_total']."') ";

            $id = $this->_db->insert_id;
            var_dump($id);
            $result = $this->_db->query(" INSERT INTO orders_to_albums( order_id,album_id ) VALUES ($id,'".$value['album_id']."') ");
           
            if ( $result ) {
                return true;
            }
       }
    }
}
?>