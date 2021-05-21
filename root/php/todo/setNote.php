<?php   
session_start();
require_once("../../dbConfig.php");
$conn = dbConfig::connect();


$sql = $conn->prepare('INSERT INTO `note`(`userid`, `title`, `text`) VALUES (?,?,?)');
$sql->execute([$_SESSION['userid'], "Thy Title", "I want to note something!"]);

$sql = "SELECT * FROM `note` WHERE userid = ".$_SESSION['userid']." ORDER BY id DESC";
$stmt = $conn->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();

$conn = null;
exit(trim($row["id"]));
?>