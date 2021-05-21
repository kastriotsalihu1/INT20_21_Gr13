<?php
session_start();
require_once("../../dbConfig.php");
$conn = dbConfig::connect();

if($_REQUEST['function'] == 0){
$id =  $_REQUEST['id'];
$id = explode("_", $id)[1];

$checked =  $_REQUEST['checked'];

$sql = ('UPDATE `todo` SET `checked`='.$checked.' WHERE `id`='.$id.' AND `userid` = '.$_SESSION['userid']);

$conn->exec($sql);

}
else if($_REQUEST['function'] == 1){
    $firstId =  $_REQUEST['firstId'];
    $secondId =  $_REQUEST['secondId'];

    $firstText =  $_REQUEST['firstText'];
    $secondText =  $_REQUEST['secondText'];

    $firstChecked =  $_REQUEST['firstChecked'];
    $secondChecked =  $_REQUEST['secondChecked'];

    $firstId = explode("_", $firstId)[1];
    $secondId = explode("_", $secondId)[1];


    $sql = ('UPDATE `todo` SET `text`="'.$firstText.'",`checked`='.$firstChecked.' WHERE `id`='.$firstId.' AND `userid` = '.$_SESSION['userid']);
    $conn->exec($sql);

    $sql = ('UPDATE `todo` SET `text`="'.$secondText.'",`checked`='.$secondChecked.' WHERE `id`='.$secondId.' AND `userid` = '.$_SESSION['userid']);
    $conn->exec($sql);
}
$conn = null;
?>