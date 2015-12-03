<?php
mysql_connect( "localhost", "root", "" );
mysql_select_db( "musicstore" );

$data=json_decode(file_get_contents("php://input"));

$email = mysql_real_escape_string( $data->email );
$password = mysql_real_escape_string( $data->password );
/*
$id = "SELECT user_id FROM users ORDER BY user_id DESC LIMIT 1";
$user_id = array();
while( $row = $id->fetch_assoc()) {
    $user_id[] = $row;

}*/

$firstName = mysql_real_escape_string( $data->firstName );
$lastName = mysql_real_escape_string( $data->lastName );

mysql_query( "INSERT INTO users( `user_email`, `user_password` )
VALUES( '".$email."', MD5('".$password."'))");

mysql_query( "INSERT INTO users_info( `user_id`, `user_firstname`, `user_lastname`, `user_created` )
VALUES( '".$id."', '".$firstName."', '".$lastName."', Now())");

mysql_close();
?>