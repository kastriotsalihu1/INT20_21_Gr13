<?php   
require_once("../../dbConfig.php");
 $conn = dbConfig::connect();


$input =  $_REQUEST['todoinput'];


$sql = $conn->prepare('INSERT INTO `todo`(`userid`, `text`, `checked`) VALUES (?, ?, ?)');
$sql->execute(['0',$input,'0']);

$conn = null;

?>