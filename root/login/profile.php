<?php 
session_start();
require_once("dbConfig.php");
echo "Welcome ".$_SESSION['username'];

echo "<a href='logout.php' >LOG OUT</a>";
echo "<a href='delete.php' >DELETE</a>";
echo "<a href='update.php' >UPDATE</a>";

?>

