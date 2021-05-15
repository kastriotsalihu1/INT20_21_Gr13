<?php 

Class funksioni{
        public static function insert($con, $username, $email, $password, $confirmPassword, $firstname, $lastname, $phonenumber, $address){

        $query = $con->prepare("
        INSERT INTO usera ( username, email, password, confirmPassword, firstname, lastname, phonenumber, address)
        VALUES ( :username, :email, :password, :confirmPassword, :firstname, :lastname, :phonenumber, :address)
        ");
        
        $query->bindParam(":username", $username);
        $query->bindParam(":email", $email);
        $query->bindParam(":password", $password);
        $query->bindParam(":confirmPassword", $confirmPassword);
        $query->bindParam(":firstname", $firstname);
        $query->bindParam(":lastname", $lastname);
        $query->bindParam(":phonenumber", $phonenumber);
        $query->bindParam(":address", $address);
        return $query->execute();
      }
      
     public static function checkLogin($con, $username, $password){
      $query = $con->prepare(
       " SELECT* FROM usera where username=:username AND password=:password"
      );
      
       $query->bindParam(":username", $username);
       $query->bindParam(":password", $password);
       $query->execute();
      
       //check how many rows are returned
      
       if($query->rowCount()==1){
         return true;
       }else{
         return false;
       }
      
      }
      
      public static function validateString($string){
        $string= strip_tags($string);
        $string = trim($string);
        return $string;
      }
      public static function hashedPw($string){
        $string= md5($string);
        return $string;
      
      }
      
      public static function updateInfo($con,$id,$username, $email, $password, $confirmPassword, $firstname, $lastname, $phonenumber, $address){
          $query= $con->prepare("
          Update usera SET username=:username, email=:email, password=:password,
           confirmPassword=:confirmPassword, firstname=:firstname, lastname=:lastname,
            phonenumber=:phonenumber, address=:address where userid=:id
          ");
          $query->bindParam(":username", $username);
          $query->bindParam(":email", $email);
          $query->bindParam(":password", $password);
          $query->bindParam(":confirmPassword", $confirmPassword);
          $query->bindParam(":firstname", $firstname);
          $query->bindParam(":lastname", $lastname);
          $query->bindParam(":phonenumber", $phonenumber);
          $query->bindParam(":address", $address);
          $query->bindParam(":id",$id);
          return $query->execute();
      
      }
      
      public static function checkUserNameExists($con, $username){
        $query= $con->prepare("
        select * from usera where username=:username
        ");
        $query->bindParam(":username", $username);
        $query->execute();
        if($query->rowCount()==1)
           return false;
      
        return true;
      }
      public static function checkEmailExists($con, $email){
        $query= $con->prepare("
        select * from usera where email=:email
        ");
        $query->bindParam(":email", $email);
        $query->execute();
        if($query->rowCount()==1)
           return false;
      
        return true;
      }


}











?>
