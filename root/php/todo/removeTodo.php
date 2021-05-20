<?php
require_once("../../dbConfig.php");
$conn = dbConfig::connect();


$id =  $_REQUEST['id'];

$id = explode("_", $pizza)[1];


$sql = $conn->prepare('DELETE FROM `todo` WHERE id = ?');
$sql->execute($id);

$conn = null;
?>