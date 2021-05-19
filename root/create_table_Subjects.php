<?php 
require_once("dbConfig.php");
$con= dbConfig::connect();

$Subjects="CREATE TABLE Subjects (
    subjectid INTEGER  UNSIGNED AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    grade INTEGER,
    PRIMARY KEY (subjectid),
    userid INTEGER UNSIGNED,
    FOREIGN KEY (userid) REFERENCES user(userid)
 )";
 $Literature="CREATE TABLE Literature (
    literatureid INTEGER  UNSIGNED AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    subject VARCHAR(30) NOT NULL,
    type VARCHAR(60) NOT NULL,
    submitDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userid INTEGER UNSIGNED,
    PRIMARY KEY (literatureid),
    FOREIGN KEY (userid) REFERENCES user(userid)
  )";
  
  $con->exec($Subjects);
  echo "Tabela Subjects u krijua.";
  
  $con->exec($Literature);
  echo "Tabela Literatura u krijua.";


  ?>