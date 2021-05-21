<?php  
session_start(); 
require_once("../../dbConfig.php");
$conn = dbConfig::connect();


$input =  $_REQUEST['subject'];
$userid=$_SESSION['userid'];

$sql = $conn->prepare('INSERT INTO `subjects`(`name`, `grade`,`userid`) VALUES (?, ?, ?)');
$sql->execute([$input,'5',$userid]);

$sql = "SELECT * FROM `subjects` WHERE userid=$userid";
$stmt = $conn->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();

$conn = null;

?>