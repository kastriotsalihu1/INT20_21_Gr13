<?php   
session_start();
require_once("../../dbConfig.php");
$conn = dbConfig::connect();


$input =  $_REQUEST['todoinput'];

$sql = $conn->prepare('INSERT INTO `todo`(`userid`, `text`, `checked`) VALUES (?, ?, ?)');
$sql->execute([$_SESSION['userid'], $input, '0']);

$sql = "SELECT * FROM `todo` WHERE userid = 0 ORDER BY id DESC";
$stmt = $conn->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();

$conn = null;
exit(trim($row["id"]));

?>