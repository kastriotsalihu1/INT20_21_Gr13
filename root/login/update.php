<?php 
session_start();
require_once("../dbConfig.php");
require_once("functions.php");
$username=$_SESSION['username'];


if(isset($_POST['update'])){
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
     echo "username already exists";
     return;
   }
   if(!funksioni::checkEmailExists($con, $email)){
     echo "Email already exists";
     return;
   }
 
   $currentUserName = $_SESSION['username'];
   $query = $con->prepare("
     SELECT * from usera WHERE username=:username
   ");
   $query->bindParam(":username", $currentUserName);
   $query->execute();
   $result = $query->fetch(PDO::FETCH_ASSOC);
   $id=$result['userid'];
   
   if(funksioni::updateInfo($con,$id,$username, $email, $password, $confirmPassword, $firstname, $lastname, $phonenumber, $address)){
   $_SESSION['username']= $username;
   header("Location:profile.php");
   
  }
 
 }

?>


<!DOCTYPE html>
<html>
  <head>
  <title>Edit profile</title>
  <link rel="stylesheet" href="styles/register.css">
  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css">
  <!-- Simple css to remove the watermark from the hosting website -->

  </head>
  <body>
    
     <div class="hero">
       <div class="form-box">
          <div class="button-box">
            <div id="btn"> </div>
             <button type="button" class="toggle-btn" id="one"><a href="login.php">Sign in</a></button>
             <button type="button" class="toggle-btn" id="two">Sign up</button>
          </div>
          <div class="icon">
            <a href="index.html">
            <img src="images/wp_img/logo.png" width="80px"  id="icon" alt="User Icon" >
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
                <button type="submit"  class="submit-btn" name="update"><b>Update</b></button>
                
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