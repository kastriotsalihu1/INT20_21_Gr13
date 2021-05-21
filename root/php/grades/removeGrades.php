<?php   
session_start();
$conn = null;
require_once("../../dbConfig.php");
$conn = dbConfig::connect();


$text =  trim($_REQUEST['text']);
$userid2=$_SESSION['userid'];

$sql = $conn->prepare('DELETE FROM subjects WHERE userid=:id and name=:name');
$sql->bindParam(":name",$text);
$sql->bindParam(":id",$userid2);
$sql->execute();

// $sql = ('DELETE FROM `subjects` WHERE userid = $userid2 AND name = "'.$text.'"');
// $conn->exec($sql);

$conn = null;
?>