<?php  
require_once("dbConfig.php");
$con= dbConfig::connect();


$sql = "CREATE TABLE  users
    (
     userid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(30) NOT NULL,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50),
     firstname VARCHAR(30) NOT NULL,
     lastname VARCHAR(30) NOT NULL,
     phonenumber VARCHAR(15) NOT NULL,
     country VARCHAR(30) NOT NULL,
     address VARCHAR(200),
     data_regjistrimit TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    $con->exec($sql);
    echo "Tabela u krijua.";

?>





