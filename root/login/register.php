<!DOCTYPE html>
<html>
  <head>
  <title> SignUp</title>
  <link rel="stylesheet" href="styles/register.css">
  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css">
  <!-- Simple css to remove the watermark from the hosting website -->

  </head>
  <body>
  <?php
      require_once("../dbConfig.php");
      require("functions.php");
    
      if(isset($_POST['register'])){
         //validimi per firstname
             if($_POST['firstname']==""){
                $error_msg['firstname']="Name is required!";
             }
             $name=$_POST['firstname'];
             if(!preg_match("/^[a-zA-Z-]*$/",$name)){
                $error_msg['firstname']="Only letters allowed!";
             }
 
          //validimi per lastname
             if($_POST['lastname']==""){
                $error_msg['lastname']="Lastname is required!";
             }
             $lastname=$_POST['lastname'];
             if(!preg_match("/^[a-zA-Z-]*$/",$lastname)){
                $error_msg['lastname']="Only letters allowed!";
             }
 
          //validimi per phonenumber
          //^(\+383\s)?\d{2}[\s.-]\d{3}[\s.-]\d{3}$
            if($_POST['phonenumber']==""){
               $error_msg['phonenumber']="Phonenumber is required!";
            }
            $phone=$_POST['phonenumber'];
            if(!preg_match("/^(\+383\s)?\d{2}[\s.-]\d{3}[\s.-]\d{3}$/",$phone)){
               $error_msg['phonenumber']="Format is (+383 44 132 765) or (+383 44-132-765)!";
            }
            //validimi per username
            //^(?=.{8,20}$)(?=.*[0-9])(?!.*[_.]{2})(?=.*[a-zA-Z])[a-zA-Z0-9._]+(?<![_.])$
            //8-20 ch, smundet me fillu as me mbaru me . ose _
            //duhet patjeter me permbajt 1 numer dhe 1 shkronje
            if($_POST['username']==""){
              $error_msg['username']="Username is required!";
             }
            $uname=$_POST['username'];
            if(!preg_match("/^(?=.{8,20}$)(?=.*[0-9])(?!.*[_.]{2})(?=.*[a-zA-Z])[a-zA-Z0-9._]+(?<![_.])$/",$uname)){
             $error_msg['username']="Username must have 8-20 chars and it must have a letter and a number, can't start or end with (. or _), but can contain a (. or _)!";
            }
            //validimi per email
            //^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
            if($_POST['email']==""){
             $error_msg['email']="Email is required!";
            }
            $email=$_POST['email'];
            if(!preg_match("/^\S+@\S+\.\S+$/",$email)){
             $error_msg['email']="Email has the format test@gmail.com!";
            }
            //validimi per password
            //Minimum eight characters, at least one uppercase letter,
            // one lowercase letter, one number and one special character
            if($_POST['pw']==""){
             $error_msg['pw']="Password is required!";
            }
            $pw=$_POST['pw'];
            if(!preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/",$pw)){
             $error_msg['pw']="Password must have a minimum of 8ch, at least one uppercase|lowerlase letter, a number and a special character !";
            }
            //validimi per konfirmim te passwordit
            if($_POST['pwConfirm']==""){
             $error_msg['pwConfirm']="Confirm your password!";
            }
            $pwCon=$_POST['pwConfirm'];
            if($pwCon!=$_POST['pw']){
             $error_msg['pwConfirm']="Passwords should match!";
            }
            //radio Buttons gender
            if($_POST['country'] == -1)
              $error_msg['country']="Choose one option!";

           if( empty($error_msg['firstname']) && 
               empty($error_msg['lastname']) &&
               empty($error_msg['username']) &&
               empty($error_msg['pw']) &&
               empty($error_msg['pwConfirm']) &&
               empty($error_msg['email']) &&
               empty($error_msg['phonenumber'])
             ){
               $con= dbConfig::connect();
 
               $username = funksioni::validateString($_POST['username']);
               $email = funksioni::validateString($_POST['email']);
               $password = funksioni::hashedPw($_POST['pw']);
               $confirmPassword = funksioni::hashedPw($_POST['pwConfirm']);
               $firstname = funksioni::validateString($_POST['firstname']);
               $lastname = funksioni::validateString($_POST['lastname']);
               $phonenumber = funksioni::validateString($_POST['phonenumber']);
               $address = funksioni::validateString($_POST['address']);
             
              if(!funksioni::checkUserNameExists($con, $username)){
                echo "Username already exists.";
                return;
              }
              if(!funksioni::checkEmailExists($con, $email)){
               echo "Emails already exists.";
               return;
             }
              if(funksioni::insert($con,$username, $email, $password, $confirmPassword, $firstname, $lastname, $phonenumber, $address)){
                $_SESSION['username']= $username;
                header("Location:../application.html");
               
              }

              }

     }
      
      ?>
     <div class="hero">
       <div class="form-box">
          <div class="button-box">
            <div id="btn"> </div>
             <button type="button" class="toggle-btn" id="one"><a href="login.php">Sign in</a></button>
             <button type="button" class="toggle-btn" id="two">Sign up</button>
          </div>
          <div class="icon">
            <a href="index.html">
            <img src="../images/wp_img/logo.png" width="80px"  id="icon" alt="User Icon" >
          </a>
          </div>
         <form  id="register" method="post" action="" class="input-group" name="form" >
             <div class="column" id="left">
                <input type="text" class="input-field" placeholder="Username" value="<?php if(isset($_POST['username'])) echo $_POST['username'] ?>"  name="username" autofocus>
                <?php  
                   if(isset($error_msg['username'])){
                      echo "<div class='error' >".$error_msg['username']."</div>";
                   }
                  ?>
                
                <input type="email" class="input-field" placeholder="Email"  value="<?php if(isset($_POST['email'])) echo $_POST['email'] ?>"   name="email" autofocus>
                <?php  
                   if(isset($error_msg['email'])){
                      echo "<div class='error' >".$error_msg['email']."</div>";
                   }
                  ?>
                <input type="Password" name="pw" class="input-field"  value="<?php if(isset($_POST['pw'])) echo $_POST['pw'] ?>"    placeholder="Password">
                <?php  
                   if(isset($error_msg['pw'])){
                      echo "<div class='error' >".$error_msg['pw']."</div>";
                   }
                  ?>
                
                <input type="Password" name="pwConfirm" class="input-field"  value="<?php if(isset($_POST['pwConfirm'])) echo $_POST['pwConfirm'] ?>"    placeholder="Confirm Password" >
                <?php  
                   if(isset($error_msg['pwConfirm'])){
                      echo "<div class='error' >".$error_msg['pwConfirm']."</div>";
                   }
                  ?>
             </div>

             <div class="column">
                <input type="text" class="input-field" placeholder="Firstname"  name="firstname"  value="<?php if(isset($_POST['firstname'])) echo $_POST['firstname'] ?>"  autofocus>
                  <?php  
                   if(isset($error_msg['firstname'])){
                      echo "<div class='error' >".$error_msg['firstname']."</div>";
                   }
                  ?>
                <input type="text" class="input-field" placeholder="Lastname"   name="lastname"  value="<?php if(isset($_POST['lastname'])) echo $_POST['lastname'] ?>" autofocus>
                <?php  
                   if(isset($error_msg['lastname'])){
                      echo "<div class='error' >".$error_msg['lastname']."</div>";
                   }
                  ?>

                <input type="text" name="phonenumber" class="input-field"   placeholder="Phonenumber" name="phonenumber"  value="<?php if(isset($_POST['phonenumber'])) echo $_POST['phonenumber'] ?>" >
                <?php  
                   if(isset($error_msg['phonenumber'])){
                      echo "<div class='error' >".$error_msg['phonenumber']."</div>";
                   }
                  ?>
                
                <input list="country" placeholder="Country"  class="input-field" name="country" autofocus>
                <datalist id="country">
                    <option value="Kosova">
                    <option value="Shqiperia">
                    <option value="Mali I Zi">
                    <option value="Maqedonia">
                    <option value="Tjeter">
                </datalist>
                <?php  
                   if(isset($error_msg['country'])){
                      echo "<div class='error' >".$error_msg['country']."</div>";
                   }
                  ?>
                <button type="submit"  class="submit-btn" name="register"><b>Sign Up</b></button>
                
             </div>
             <div class="column">
                <textarea id="address" name="address" rows="6"  class="input-field" placeholder="Specific address" >
                 Write your address.
                </textarea>
                <div id="gen" name="gender" class="input-field" style="background-color: white;color:gray;border:none" >
                    <input type="radio" id="male" name="gender" value="Male">
                    <label for="male">Male</label><br>
                    <input type="radio" id="female" name="gender" value="Female">
                    <label for="female">Female</label><br>
                    <input type="radio" id="other" name="gender" value="Other">
                    <label for="other">Other</label>
                </div>
                
                <input type="checkbox"  name="terms" value="terms">
                <label for="terms" style="color:gray"> I agree to Terms and Service rules.</label><br>
                <input type="checkbox"  name="news" value="news">
                <label for="news" style="color:gray"> I want to receive news and emails.</label><br>
               
             </div>
         </form>
        
       </div>
     </div>
     
  </body>
</html>

