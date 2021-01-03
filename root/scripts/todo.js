$(document).ready(function () {
  $("#todoinput").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      $("#itemlist").prepend("<li>" + $("#todoinput").val() + "</li>");
      $("#todoinput").val("");
    }
  });
  $(document.body).on("click", "#itemlist > li", function () {
    $(this).toggleClass("checked");
  });

  $("#displayinput").click(function () {
    $(this).toggleClass("rotate");
    $("#todoinput").slideToggle("fast", function () {});
  });
});
