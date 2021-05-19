<?php

define("servername", "localhost");
define("username", "root");
define("password", "");
define("dbname", "estudent");
try{
    $con = new PDO("mysql:host=localhost; dbname=estudent", username, password);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);   
    if(isset($_POST)){
      $file=$_POST['file'];
      $lenda=$_POST['lenda'];
      $lloji=$_POST['lloji'];
       $query="INSERT INTO Literature(name,subject,type) VALUES('$file','$lenda','$lloji')";
       $con->exec($query); 
       echo "New record created successfully";
    };
}catch(PDOException $e){
    echo $e->getMessage();
}
$conn = null;

?>