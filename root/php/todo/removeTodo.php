<?php
session_start();
require_once("../../dbConfig.php");
$conn = dbConfig::connect();


$id =  $_REQUEST['id'];

$id = explode("_", $id)[1];

$sql = ('DELETE FROM `todo` WHERE id = '.$id);

$conn->exec($sql);

$conn = null;
?>