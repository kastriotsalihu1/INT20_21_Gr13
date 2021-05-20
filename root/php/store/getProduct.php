<?php
require_once("../../dbConfig.php");
$con = dbConfig::connect();

$sqlCondition = "";
foreach ($_GET as $property => $value) {
    $sqlCondition .= " " . $property . " = '" . $value . "' AND ";
}
// remove the last " AND "
$sqlCondition = substr($sqlCondition, 0, -5);

try {
    $row = $con->query("SELECT * FROM product where " . $sqlCondition)->fetch();
} catch (PDOException $e) {
    echo $e->getMessage();
}

$product = array();
$product["id"] = $row["id"];
$product["imageSrc"] = $row["imageSrc"];
$product["price"] = $row["price"];

echo json_encode($product);

?>