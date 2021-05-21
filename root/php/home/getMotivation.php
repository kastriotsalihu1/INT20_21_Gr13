
<?php

require_once("../../dbConfig.php");
$con = dbConfig::connect();

$row = $con->query(
    "SELECT * FROM motivation
    ORDER BY RAND()
    LIMIT 1;"
)->fetch();

echo $row["content"]

?>  