<!DOCTYPE html>
<html>

<head>
  <title>LogIn</title>
  <link rel="stylesheet" href="styles/login.css">
  <!-- Simple css to remove the watermark FROM the hosting website -->
  <link rel="stylesheet" href="../styles/removewatermark.css">
  <!-- Simple css to remove the watermark from the hosting website -->

</head>

<body>
  <?php
  session_start();

  require_once "Auth.php";
  require_once "Util.php";

  $auth = new Auth();
  $util = new Util();

  require_once "authCookieSessionValidate.php";

  // echo "<script> alert(" . $isLoggedIn . ")</script>";
  if ($isLoggedIn) {
    // $util->redirect("../application.php");
  }

  require_once("../dbConfig.php");
  require("functions.php");

  if (isset($_POST['login'])) {

    $con = dbConfig::connect();

    $username = funksioni::validateString($_POST['username']);
    $password = funksioni::hashedPw($_POST['pw']);

    if (funksioni::checkLogin($con, $username, $password)) {

      // // Set Auth Cookies if 'Remember Me' checked
      // if (!empty($_POST["remember"])) {
      //   setcookie("member_login", $username, $cookie_expiration_time);

      //   $random_password = $util->getToken(16);
      //   setcookie("random_password", $random_password, $cookie_expiration_time);

      //   $random_selector = $util->getToken(32);
      //   setcookie("random_selector", $random_selector, $cookie_expiration_time);

      //   $random_password_hash = password_hash($random_password, PASSWORD_DEFAULT);
      //   $random_selector_hash = password_hash($random_selector, PASSWORD_DEFAULT);

      //   $expiry_date = date("Y-m-d H:i:s", $cookie_expiration_time);

      //   // mark existing token as expired
      //   $userToken = $auth->getTokenByUsername($username, 0);
      //   if (!empty($userToken[0]["id"])) {
      //     $auth->markAsExpired($userToken[0]["id"]);
      //   }
      //   // Insert new token
      //   $auth->insertToken($username, $random_password_hash, $random_selector_hash, $expiry_date);
      // } else {
      //   $util->clearAuthCookie();
      // }

      $_SESSION['username'] = $username;
      $_SESSION['userid'] = funksioni::getUserId($username, $con);
      $isLoggedIn = true;
      
      echo '<pre>';
      var_dump($_SESSION);
      echo '</pre>';
      header("Location:../application.php");
    } else {
      $error_msg['pw'] = "Username or password is incorrect!";
    }
  }

  ?>
  <div class="hero">
    <div class="form-box">
      <div class="button-box">
        <div id="btn"> </div>
        <button type="button" class="toggle-btn" id="one">Sign in</button>
        <button type="button" class="toggle-btn" id="two"><a href="register.php">Sign up</a></button>
      </div>
      <div class="icon">
        <a href="index.php">
          <img src="../images/wp_img/logo.png" width="80px" id="icon" alt="User Icon">
        </a>
      </div>
      <form id="login" class="input-group" name="login" method="post" action="">
        <input type="text" class="input-field" placeholder="Username" name="username" autofocus>

        <input type="Password" name="pw" class="input-field" placeholder="Password" autofocus>
        <?php
        if (isset($error_msg['pw'])) {
          echo "<div class='error' >" . $error_msg['pw'] . "</div>";
        }
        ?>
        <div>
          <input type="checkbox" name="remember" id="remember" <?php if (isset($_COOKIE["member_login"])) { ?> checked <?php } ?> /> <label for="remember-me">Remember me</label>
        </div>
        <button type="submit" name="login" class="submit-btn">
          <b>Sign in </b>
        </button>
      </form>

    </div>
  </div>

</body>

</html>