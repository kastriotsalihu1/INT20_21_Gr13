<?php  
session_start(); 
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

$text =  trim($_REQUEST['text']);
$value =  $_REQUEST['value'];
$userid1=$_SESSION['userid'];
    echo '<pre>';
    var_dump($userid1,$text,$value);
    echo '</pre>';

$sql = $conn->prepare('UPDATE subjects SET grade=:grade WHERE userid=:id and name=:name');
$sql->bindParam(":grade",$value);
$sql->bindParam(":name",$text);
$sql->bindParam(":id",$userid1);
$sql->execute();

// $sql->execute([$value,$text]);



$conn = null;

?>