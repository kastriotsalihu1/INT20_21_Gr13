<?php

require_once("../../dbConfig.php");
$conn = dbConfig::connect();

function SendNotification() {
    global $conn;
    $message=$_REQUEST['message'];
    $iconType=$_REQUEST['icontype'];
    $url=$_REQUEST['url'];

    $sql = $conn->prepare('INSERT INTO `notification`(`userid`, `text`, `url`, `icontype`, `unread`) VALUES (?,?,?,?,?)');
    $sql->execute(['1',$message, $url,$iconType,1]);
}
function UpdateNotifications(){
    global $conn;
    $sql = "SELECT *, `notification`.`id` as `nid` FROM `notification` RIGHT JOIN `icon` ON `icon`.`id` = `notification`.`icontype`WHERE `notification`.`userid` = 1 ORDER BY `nid` DESC";
    $stmt = $conn->query($sql);

    $notificatinCount = 0;
    while ($row = $stmt->fetch()) {
        $class = "";
        if($row['unread']=="1"){
          $class="notificatonUnread";
        }
        echo('<a href="'.$row['url'].'" class="notificationItem notification_'.$row['nid'].'">
        <div>
          <i class="'.$row['name'].' fa-2x notificationImage centeredicon"></i>
        </div>
        <div class="notificationTextContainer">
          <span class="notificationText">'.$row['text'].'</span>
          <span class="notificationTime"><span class="time">'.$row['time'].'</span><div class='.$class.'></div></span>
        </div>
      </a>');
      $notificatinCount++;
    }
}

function UnreadNotificationNumber(){
    global $conn;
    $sql = "SELECT `unread`,'userid' FROM `notification` WHERE `unread` = 1 AND `userid` = 1";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    echo ($count = $stmt->rowCount());
}

function modifyNotification($id){
  global $conn;
  $sql = "UPDATE `notification` SET `unread`= 0 WHERE `id` = ".$id." AND `userid` = 1";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
}


if ($_REQUEST['function']==1) {
    SendNotification();
    UpdateNotifications();
    echo('|');
    UnreadNotificationNumber();
}
else if($_REQUEST['function']==2){
  modifyNotification($_REQUEST['id']);
}
else{
    UpdateNotifications();
    echo('|');
    UnreadNotificationNumber();
}
?>