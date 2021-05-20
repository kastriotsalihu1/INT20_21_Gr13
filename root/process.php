<?php
session_start();
require_once("dbConfig.php");
$con= dbConfig::connect();
    //POST
    if(isset($_POST)){
      $file=$_POST['file'];
      $lenda=$_POST['lenda'];
      $lloji=$_POST['lloji'];
      
      $query =$con->prepare("Insert into Literature(name,subject,type,userid)values (:name, :subject, :type, :userid)");
      
      $query->bindValue(':name',$file);
      $query->bindValue(':subject',$lenda);
      $query->bindValue(':type',$lloji);
      $query->bindValue(':userid',$_SESSION['userid']);
      $query->execute();
      header("Location: application_grades.html");
    }
$conn = null;
      
    

?>