<?php   
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

$text =  trim($_REQUEST['text']);
$value =  $_REQUEST['value'];


$sql = $conn->prepare('UPDATE `subjects` SET `grade`=? WHERE userid =3 and `name`=?');
$sql->execute([$value,$text]);



$conn = null;

?>