<?php
session_start();
require_once("dbConfig.php");
$con= dbConfig::connect();

$statement=$con->prepare('Select title, artist, pic, audio from songs where userid=:id');
$statement->bindValue(":id", $_SESSION['userid']);
$statement->execute();
$songs =$statement->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($songs);

?>








