<?php 
require_once("dbConfig.php");
$con= dbConfig::connect();

$query="CREATE TABLE songs (
    songid INTEGER  UNSIGNED AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    artist VARCHAR(30) NOT NULL,
    pic VARCHAR(2048) NOT NULL,
    audio VARCHAR(60) NOT NULL,
    userid INTEGER UNSIGNED,
    PRIMARY KEY (songid)
    -- FOREIGN KEY (userid) REFERENCES usera(userid);
 )";

  $con->exec($query);
  echo "Tabela songs  u krijua.";


  ?>