<?php

class funksioni
{
  public static function insert($con, $username, $email, $password, $firstname, $lastname, $phonenumber, $address)
  {

    $query = $con->prepare("
        INSERT INTO user ( username, email, password, firstname, lastname, phonenumber, address)
        VALUES ( :username, :email, :password, :firstname, :lastname, :phonenumber, :address)
        ");

    $query->bindParam(":username", $username);
    $query->bindParam(":email", $email);
    $query->bindParam(":password", $password);
    $query->bindParam(":firstname", $firstname);
    $query->bindParam(":lastname", $lastname);
    $query->bindParam(":phonenumber", $phonenumber);
    $query->bindParam(":address", $address);
    return $query->execute();
  }

  public static function checkLogin($con, $username, $password)
  {
    $query = $con->prepare(
      " SELECT* FROM user where username=:username AND password=:password"
    );

    $query->bindParam(":username", $username);
    $query->bindParam(":password", $password);
    $query->execute();

    //check how many rows are returned
    return $query->rowCount() == 1;
  }

  public static function validateString($string)
  {
    $string = strip_tags($string);
    $string = trim($string);
    return $string;
  }
  public static function hashedPw($string)
  {
    $string = md5($string);
    return $string;
  }

 
  public static function updateInfo($con, $id, $username, $email, $password, $confirmPassword, $firstname, $lastname, $phonenumber, $address)
  {
    $query = $con->prepare("
          UPDATE user SET username=:username, email=:email, password=:password,
           firstname=:firstname, lastname=:lastname,
            phonenumber=:phonenumber, address=:address WHERE userid=:id
          ");
    $query->bindParam(":username", $username);
    $query->bindParam(":email", $email);
    $query->bindParam(":password", $password);
    $query->bindParam(":firstname", $firstname);
    $query->bindParam(":lastname", $lastname);
    $query->bindParam(":phonenumber", $phonenumber);
    $query->bindParam(":address", $address);
    $query->bindParam(":id", $id);
    return $query->execute();
  }

  public static function checkUserNameExists($con, $username)
  {
    $query = $con->prepare("SELECT * FROM user WHERE username=:username");
    $query->bindParam(":username", $username);
    $query->execute();
    if ($query->rowCount() == 1)
      return false;

    return true;
  }
  public static function checkEmailExists($con, $email)
  {
    $query = $con->prepare("SELECT * FROM user WHERE email=:email");
    $query->bindParam(":email", $email);
    $query->execute();
    if ($query->rowCount() == 1)
      return false;

    return true;
  }
}
