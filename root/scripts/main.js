var toggleDuration = 800;

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











