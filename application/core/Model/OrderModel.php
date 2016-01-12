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

        foreach ($details as $value) {
            
            $success = $this->_db->query("INSERT INTO orders ( order_id,user_id,order_created,order_shipping_address,order_shipping_city,order_shipping_zipcode,order_shipping_phone,order_payment_method,order_total ) VALUES ( DEFAULT,'".$value['user_id']."',CURRENT_TIMESTAMP,'".$value['order_shipping_address']."','".$value['order_shipping_city']."','".$value['order_shipping_zipcode']."','".$value['order_shipping_phone']."','".$value['order_payment_method']."','".$value['order_total']."') ");
            $id = $this->_db->insert_id;
            if ( $success ) {
                $id = $this->_db->insert_id;
                $result = $this->_db->query("INSERT INTO orders_to_albums( order_id,album_id ) VALUES ($id,'".$value['album_id']."') ");

            }else{
                echo "INSERT INTO orders ( order_id,user_id,order_shipping_address,order_shipping_city,order_shipping_zipcode,order_shipping_phone,order_payment_method,order_total,order_created ) VALUES ( DEFAULT, '".$value['user_id']."','".$value['order_shipping_address']."','".$value['order_shipping_city']."','".$value['order_shipping_zipcode']."','".$value['order_shipping_phone']."','".$value['order_payment_method']."','".$value['order_total']."',CURRENT_TIMESTAMP ) ";
            }      
        }
        return true;
    }
}
?>