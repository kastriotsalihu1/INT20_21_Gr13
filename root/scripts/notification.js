function updateNotification() {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "getuser.php?q=" + str, true);
    xmlhttp.send();
  }
}

function changeNotificationValue(value) {
  notificationValue = value;
  if (value == 0) value = null;
  $("#notification").attr("data-badge", value);
}
