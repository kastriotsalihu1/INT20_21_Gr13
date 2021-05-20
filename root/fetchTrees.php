<?php
session_start();
require_once("dbConfig.php");
$con= dbConfig::connect();

$statement=$con->prepare('SELECT COUNT(*) FROM trees where userid=:id');
$statement->bindValue(':id',$_SESSION['userid']);
$statement->execute();
$songs =$statement->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($songs);
