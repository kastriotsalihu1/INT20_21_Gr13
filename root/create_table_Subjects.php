<?php 
require_once("dbConfig.php");
$con= dbConfig::connect();

$Subjects="CREATE TABLE Subjects (
    subjectid INTEGER  UNSIGNED AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    grade INTEGER,
    PRIMARY KEY (subjectid)
 )";
 $Literature="CREATE TABLE Literature (
    literatureid INTEGER  UNSIGNED AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    subject VARCHAR(30),
    type VARCHAR(60),
    submitDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (literatureid)
  )";
  
  $con->exec($Subjects);
  echo "Tabela Subjects u krijua.";
  
  $con->exec($Literature);
  echo "Tabela Literatura u krijua.";


  ?>