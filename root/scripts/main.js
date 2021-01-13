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
          `rgba(${Math.random() * 256},${Math.random() * 256},${
            Math.random() * 256
          }, ${Math.random()})`
        );
    }
  });
  $("#notification").on("click", function () {
    notificationCount--;
    $("#notification").attr("data-badge", notificationCount);
  });
});

$(document).ready(function () {
  $(document.body).on("click", ".information", function () {
    console.log("hello");
  });
  $(document.body).on("click", "#hamburger", function () {
    $("nav").toggleClass("hidenav");
  });

  $("#user").on("click", function (e) {
    $("#settingdropdown").animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      "fast"
    );
  });

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark_mode") {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark_mode");
      localStorage.setItem("theme", "dark_mode");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);
});











