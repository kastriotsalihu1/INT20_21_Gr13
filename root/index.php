<?php  
require("Mail/PHPMailerAutoload.php");
if(isset($_POST['submit'])){
  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->SMTPAuth = true;                               
  $mail->SMTPSecure='ssl';
  $mail->Host='smtp.gmail.com';
  $mail->Port='465';
  $mail->isHTML();
  $mail->Username='estudentgroup@gmail.com';
  $mail->Password='estudent123$';
  $mail->SetFrom('estudentgroup@gmail.com','E-Student');
  $mail->addReplyTo('estudentgroup@gmail.com');
  $mail->Subject='User Feedback';
  $mail->Body= $_POST['feedback'];
  $mail->AddAddress('estudentgroup@gmail.com','E-Student');
  $mail->Send();
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="./styles/index.css" />
  <link href="dependencies/fontawesome/css/all.css" rel="stylesheet" />
  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css">
  <!-- Simple css to remove the watermark from the hosting website -->
 
  <title>eStudent | Welcome</title>

  <style>
    body {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      width: 100%;
      padding: 0;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  </style>
</head>

<body>
  <!-- SHARE WITH FACEBOOK BUTTON SDK -->
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0"
    nonce="EYOQnjmH"></script>

  <!-- LOGO AND NAVIGATION -->
  <header class="primarycolor">
    <img src="./images/wp_img/logo.png" alt="icon of a person using a laptop" />
    <nav class="primarycolor">
      <ul>
        <li><a href="#introsection">Home</a></li>
        <li><a href="#aboutsection">About</a></li>
        <li><a href="#features">Features</a></li>

        <li><a class="login" href="login/login.php">Log In</a></li>
      </ul>
    </nav>
  </header>

  <!-- INTRO AND APPLICATION PLACEHOLDER -->
  <section id="intro" class="primarycolor">
    <a id="introsection"></a>
    <div>
      <h1>A simple place to keep your student life organised!</h1>
      <p>
        Keeping track of your studies has never been easier! No more carrying
        around hundred pages books and heavy backpacks we're all bored of.
        Create an account on eStudent for better productivity and less
        stressfull college life.
      </p>
    </div>

    <img src="./images/wp_img/laptop_placeholder.png" alt="Photo of a laptop" />
  </section>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
    <path
      d="M0,128L120,138.7C240,149,480,171,720,154.7C960,139,1200,85,1320,58.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
    </path>
  </svg>

  <!-- ABOUT -->
  <section id="about">
    <a id="aboutsection"></a>
    <div class="ab_content">
      <img src="./images/wp_img/tasks.png" alt="Photo-Tasks" />
      <div>
        <h2>Keep a clear head</h2>
        <p>
          Studying and keeping things organized has never been easier. Plus doing that while you're actually having fun,
          is not very common. Make your dreams happen, first by getting the grades you want and think you deserve, than
          by making that knowledge useful. You have already a lot in your mind, so don't let the study life make it
          worse. Use eStudent and you're ready to reach our for your goals.You worry about the learning, and let us
          handle everything else.
        </p>
      </div>
    </div>
    <div class="ab_content">
      <img src="./images/wp_img/chatlive.png" alt="Photo-Tasks" />
      <div>
        <h2>Do better in your studies</h2>
        <p>
      <?php  $data=readfile("data.txt"); 

      ?>
        </p>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features">
    <a name="features"></a>
    <h2>eStudent is a place to </h2>
    <div id="feat_container">
      <!-- <div class="feat_content">
          <img
            src="./images/wp_img/organisation.jpg"
            alt="Photo describing organisaton skills"
          />
          <h2>WRITE YOUR TODOS</h2>
          <p>
            As every student you have lots of tasks to complete? Well you don't have to remember it all. Write it down on your toDos and delete a task as soon as you're done with it.
          </p>
        </div> -->
      <div class="feat_content">
        <img src="./images/wp_img/notes.png" alt="Photo describing organisaton skills" width="150px" />
        <h2>WRITE NOTES AND TODOS</h2>
        <p>
          As every student you have lots of tasks to complete? Well you don't have to remember it all. Write it down on
          your Notes and todos and delete a task as soon as you're done with it.. Also you can change their place,
          giving priority to the note/todo you want.
        </p>
      </div>
      <div class="feat_content">
        <img src="./images/wp_img/grades.png" width="150px" />
        <h2>KEEP TRACK OF YOUR GRADES</h2>
        <p>
          Grades and rated assignments don't have to be seen by everyone, save
          them on eStudent to keep it private. Make your plans, goals, arrangements based on them.

        </p>
      </div>
      <div class="feat_content">
        <img src="./images/wp_img/literature.png" width="150px" />
        <h2>STORE YOUR FILES</h2>
        <p>
          Save all your university literature organized by the subject and the importance it has. Look it up online
          anytime. Best collecting algorithms save so much of your time, instead of
          having to look up for things manually and very often.
        </p>
      </div>
      <div class="feat_content">
        <img src="./images/wp_img/music.png" width="150px" />
        <h2>LISTEN TO GOOD MUSIC</h2>
        <p>
          We've got some relaxing, 'study to' music that helps with concentration while doing your uni work. Now you
          dont have to open multiple tabs to make your study hours comfortable, it's all there!
        </p>
      </div>
      <div class="feat_content">
        <img src="./images/wp_img/pomodoro.png" width="150px" />
        <h2>USE THE POMODORO TIMER</h2>
        <p>
          World wide checked technique for better productivity. Less overthinking and more attention to what really
          matters. By using pomodoro timer you're already a contributor to the environment's wellbeing.
        </p>
      </div>
      <div class="feat_content">
        <img src="./images/wp_img/store.png" width="150px" />
        <h2>BUY ALL THE NESSESARY THINGS</h2>
        <p>
          Ran out of study products? You can get them on our little store online. Choose the item, it comes with 4
          different colors, buy as many products of that kind as you want and put it in your chart.
        </p>
      </div>
    </div>
  </section>
  <!-- REVIEWS -->
  <section id="reviews">
    <a name="reviews"></a>
    <div class="big">
      <h2>
        "eStudent is a life saviour to me and my colleagues."
      </h2>
      <img src="./images/wp_img/profile.png" alt="Profile pic of a student" />
      <p class="primarycolor">- Sarah Smith</p>
    </div>
    </div>
  </section>
  <!-- REGISTER -->
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 160">
      <path
        d="M0,256L120,245.3C240,235,480,213,720,218.7C960,224,1200,256,1320,272L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
      </path>
    </svg>
    <div id="register" class="primarycolor">
      <h2>Start organizing your life now!</h2>
      <p>Create your own account and make things right today!</p>
      <a class="login" href="login/login.php">REGISTER NOW</a>
    </div>
  </div>
  <?php  
  $file=fopen("data1.txt","w");
  $nonsenceData1="I am writing this text inside data.txt folder";
  fwrite($file,$nonsenceData1);
  fclose($file);
  ?>

  <!-- FOOTER -->
  <footer class="secondarycolor">
    <a name="footer"></a>
    <div class="fo_container">
      
      <table>
        <tr>
          <td><a href="#intro">HOME</a></td>
          <td><a href="contact_faq.html">CONTACT US</a></td>
          <td><a href="login/login.php">SIGN UP</a></td>

        </tr>
        <tr>
          <td><a href="#features">FEATURES</a></td>
          <td><a href="terms&conditions.html">TERMS & CONDITIONS</a></td>
          <td><a href="privacy&policy.html">PRIVACY & POLICY</a></td>
        </tr>
      </table>

      <div class="sign_up">
        <h3>Send Feedback</h3>
        <form id="newspaper" name="subscribe" method="post" action="">
          <textarea cols ="28" rows="5" name="feedback" placeholder="Write feedback anonymously"></textarea>
          <br><br>
          <input type="submit" name="submit" value="SEND EMAIL" form="newspaper" />
          
        
      </div>
    </div>
    <div class="fo_container">
      <p>&copy; 2020 eStudent</p>
      <div class="fb-share-button" data-href="https://estudentproject.com/application.php" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Festudentproject.com%2Fapplication.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
      <div id="icons">
        <a href="/files/Facebook_Guide_for_Beginners.pdf"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.linkedin.com/in/midie-merovci-2167891b3/"><i class="fab fa-linkedin"></i></a>
        <a href="https://myaccount.google.com/?tab=kk"><i class="fab fa-google-plus-square"></i></a>
        <a href="https://www.instagram.com/m_merovc/"> <i class="fab fa-instagram-square"></i></a>
      </div>
    </div>
  </footer>
</body>

</html>