<?php
session_start();
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
      
      $query =$con->prepare("Insert into Literature(name,subject,type,userid)values (:name, :subject, :type, :userid)");
      
      $query->bindValue(':name',$file);
      $query->bindValue(':subject',$lenda);
      $query->bindValue(':type',$lloji);
      $query->bindValue(':userid',$_SESSION['userid']);
      $query->execute();
      header("Location: application_grades.html");
    };
}catch(PDOException $e){
    echo $e->getMessage();
}
$conn = null;

?>