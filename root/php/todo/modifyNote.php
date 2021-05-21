<?php
session_start();
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

$id =  $_REQUEST['id'];
$id = explode("_", $id)[1];

$title =  $_REQUEST['title'];
$text =  $_REQUEST['text'];

$sql = ('UPDATE `note` SET `title`="'.$title.'",`text`="'.$text.'" WHERE `id`='.$id.' AND `userid` = '.$_SESSION['userid']);
$conn->exec($sql);

$conn = null;
?>