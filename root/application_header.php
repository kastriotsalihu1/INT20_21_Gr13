<!-- this is the header -->
<header>
  <!-- opens and closes the side navigation bar -->
  <div id="hamburger" class="centeredicon">
    <i class="fas fa-bars fa-2x"></i>
  </div>

  <!-- displays the nessesary user information -->
  <div id="info">
    <!-- username and photo -->
    <div id="user">
      <div id="photo" class="centeredicon">
        <img
          src="images/profile/profile-placeholder.png"
          alt="Profile picture"
        />
      </div>
      <div id="name">
        <?php 
        session_start();
        require_once("dbConfig.php");
        echo isset($_SESSION['username']) ? $_SESSION['username'] : null;
        
        ?></div>
      <div id="settingsicon" class="centeredicon">
        <i class="fas fa-caret-down"></i>
      </div>
    </div>
    <!-- dropdown -->
    <div id="settingdropdown" class="dropdown" style="display: none">
      <div class="setting" >
        Dark
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div class="slider round"></div>
        </label>
      </div>
      <a href="login/update.php"  class="setting">Edit</a>
      <a href="login/logout.php"  class="setting">Log out</a>
      
    </div>

    <!-- notifications -->
    <div id="notification" class="centeredicon" data-badge="" >
      <i class="far fa-bell fa-2x" id="notification-icon"></i>
      <div class="dropdown" style="display: none">
        <div id="notificationcontainer" class="scrollwheel">
        <div class="notif read">ky eshte nje notifikacion i jepun i palexuar</div>
        <div class="notif read">ky eshte nje notifikacion i jepun i palexuar</div>
        <div class="notif ">ky eshte nje notifikacion i jepun i lexuar</div>
        <div class="notif ">ky eshte nje notifikacion i jepun  i lexuar</div>
        </div>
      </div>
    </div>
  </div>
</header>
