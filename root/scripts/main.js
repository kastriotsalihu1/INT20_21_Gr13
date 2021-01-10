const pageNames = {
  chromecast: "chromecast",
  list: "list",
  folder: "folder",
};

var toggleDuration = 800;
var activePageName;
var notificationCount = Math.floor(Math.random() * 145);

const pages = document.getElementsByClassName("nav-icons").children;
const card = document.getElementsByClassName("card");

$(function () {
  $(".nav-icons i").on("click", function () {
    let previous = $(this).parent().find(".active");
    if (previous.attr("id") != $(this).attr("id")) {
      if ($(this).attr("id") === "folder") {
        $("#notification").attr("data-badge", "");
      } else {
        notificationCount++;
        $("#notification").attr("data-badge", notificationCount);
      }

      previous.removeClass("active");
      $(this).addClass("active");

      // get card at random position, set its background color to random
      $(card)
        .eq(Math.floor(Math.random() * card.length))
        .css(
          "background-color",
          `rgba(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256
          }, ${Math.random()})`
        );
    }
  });
  $("#notification").on("click", function () {
    notificationCount--;
    $("#notification").attr("data-badge", notificationCount);
  });
});

//undone press/* information information information information  */
$(document).ready(function () {
  $(document.body).on("click", ".information", function () {
    console.log("hello");
  });
});

/* information information information information  */

