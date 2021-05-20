
<!DOCTYPE html>
<html>
  <head>
  <title>LogIn</title>
  <link rel="stylesheet" href="styles/login.css">
  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css">
  <!-- Simple css to remove the watermark from the hosting website -->

  </head>
  <body>
  <?php
    session_start();
    require_once("../dbConfig.php");
    require("functions.php");
    if(isset($_POST['login'])){
      $con= dbConfig::connect();

      $username = funksioni::validateString($_POST['username']);
      $password = funksioni::hashedPw($_POST['pw']);
      
      if(funksioni::checkLogin($con, $username, $password)){
        $_SESSION['username']= $username;
        $query="Select * from user where username=:username";
        $statement =$con->prepare($query);
        $statement->bindValue(":username", $username);
        $statement->execute();
        $row =$statement->fetch(PDO::FETCH_ASSOC);
        $_SESSION['userid']= $row['userid'];
        echo '<pre>';
        var_dump($_SESSION);
        echo '</pre>';
        header("Location:../application.php");
      }else{
        $error_msg['pw']="Username or password is incorrect!";
      }
    
    }

?>
     <div class="hero">
       <div class="form-box">
          <div class="button-box">
            <div id="btn"> </div>
             <button type="button" class="toggle-btn" id="one" >Sign in</button>
             <button type="button" class="toggle-btn" id="two"><a href="register.php">Sign up</a></button>
          </div>
          <div class="icon">
            <a href="index.html">
            <img src="../images/wp_img/logo.png" width="80px"  id="icon" alt="User Icon" >
          </a>
          </div>
         <form  id="login" class="input-group" name="login" method="post" action=""  >
              <input type="text" class="input-field" placeholder="Username"   name="username" autofocus>
              <input type="Password" name="pw" class="input-field"   placeholder="Password" autofocus >
              <?php  
                   if(isset($error_msg['pw'])){
                      echo "<div class='error' >".$error_msg['pw']."</div>";
                   }
                  ?>
              <button type="submit"  name="login"  class="submit-btn"><b>Sign in
              </b></button>
              <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
              </div>
         </form>
        
       </div>
     </div>
     
  </body>
</html>

