<?php   
$conn = null;
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

$text =  trim($_REQUEST['text']);

$sql = ('DELETE FROM `subjects` WHERE userid = 3 AND name = "'.$text.'"');
$conn->exec($sql);

$conn = null;
?>