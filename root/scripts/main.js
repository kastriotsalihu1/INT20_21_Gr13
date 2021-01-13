var toggleDuration = 800;

$(document).ready(function () {
  $(document.body).on("click", ".information", function () {
    console.log("hello");
  });
  $(document.body).on("click", "#hamburger", function () {
    $("nav").toggleClass("hidenav");
  });

  $(document.body).on("click", "#user", function () {
    $("#settingdropdown").animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      "fast"
    );
  });
});