<?php
session_start();
require_once("dbConfig.php");
$con= dbConfig::connect();

// $statement = $con->prepare($query);

//"images/trees/TreeFlat_1.png",
//  "images/trees/TreeFlat_2.png",
//  "images/trees/TreeFlat_3.png",
//  "images/trees/TreeFlat_4.png",
//  "images/trees/TreeFlat_5.png",
//  "images/trees/TreeFlat_6.png",
//  "images/trees/TreeFlat_7.png",
//  "images/trees/TreeFlat_8.png",

$statement =$con->prepare("Insert into trees(userid)
    values (:id)");
$statement->bindValue(':id',$_SESSION['userid']);
$statement->execute();

echo  "Success!";

