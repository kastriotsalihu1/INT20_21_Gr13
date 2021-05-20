<?php  

class dbConfig{
public static function connect(){
        define("servername", "localhost");
        define("username", "root");
        define("password", "");
        define("dbname", "estudent");
    try{
        $con = new PDO("mysql:host=localhost; dbname=estudent", username, password);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
    return $con;
}


}

?>



