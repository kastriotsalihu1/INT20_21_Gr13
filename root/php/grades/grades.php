<?php   
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

$input =  $_REQUEST['subject'];

$sql = $conn->prepare('INSERT INTO `subjects`(`name`, `grade`,`userid`) VALUES (?, ?, ?)');
$sql->execute([$input,'0','3']);

$sql = "SELECT * FROM `subjects` WHERE userid=3";
$stmt = $conn->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();

$conn = null;

?>