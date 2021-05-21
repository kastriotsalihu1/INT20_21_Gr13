<?php   
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

$input =  $_REQUEST['subject'];

$sql = $conn->prepare('INSERT INTO `subjects`(`name`, `grade`) VALUES (?, ?)');
$sql->execute([$input,'0']);

$sql = "SELECT * FROM `subjects` WHERE user=1";
$stmt = $conn->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();

$conn = null;

?>