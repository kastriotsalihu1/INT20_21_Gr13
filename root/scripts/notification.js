function SendNotification(message, url, icontype) {
    $(document).ready(function () {
        $.ajax({
            url: '../root/php/misc/notification.php',
            type: 'POST',
            data: {
                message: message,
                url: url,
                icontype: icontype,
                function:1,
            },
            success: function(response) {
                var resonseHTML = response.split("|");
                var count = resonseHTML.pop()
                resonseHTML = resonseHTML.join("|");

                $("#notificationcontainer").html(resonseHTML);
                changeNotificationValue(count);
            }
        });
      });
}

function LoadNotification() {
    $(document).ready(function () {
        $.ajax({
            url: '../root/php/misc/notification.php',
            type: 'POST',
            data: {
                function:3,
            },
            success: function(response) {
                var resonseHTML = response.split("|");
                var count = resonseHTML.pop()
                resonseHTML = resonseHTML.join("|");
                $("#notificationcontainer").html(resonseHTML);
                changeNotificationValue(count);
            }
        });
      });
}

function changeNotificationValue(value) {
  notificationValue = value;
  if (value == 0) value = null;
  $("#notification").attr("data-badge", value);
}

$(document).ready(function () {
    LoadNotification();
    $(document.body).on("click", ".notificationItem", function () {

        var id = $(this).attr('class').split(' ')[1];
        console.log(id);
        id = id.split('_')[1];
        console.log(id);

        $.ajax({
            url: '../root/php/misc/notification.php',
            type: 'POST',
            data: {
                id: id,
                function:2,
            }
        });
        LoadNotification();
      });
      
});
