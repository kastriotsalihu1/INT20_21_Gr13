<?php 
session_start();

require_once("dbConfig.php");
$con= dbConfig::connect();

$username=$_SESSION['username'];
$query=$con->prepare("
DELETE from user where username=:username
");
$query->bindParam(":username", $username);

$query->execute();
header("Location: login.php");
?>





