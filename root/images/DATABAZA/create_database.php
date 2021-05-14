<?php  
require_once("dbConfig.php");
$con= dbConfig::connect();


$sql = "CREATE database  estudent";
    $con->exec($sql);
    echo "db u krijua.";

?>
