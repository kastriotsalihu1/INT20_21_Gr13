$(document).ready(function () {
  $("#todoinput").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13" && $("#todoinput").val() != "") {
      $("#itemlist").prepend(
        '<li><span class="text todotext">' +
          $("#todoinput").val() +
          '</span><span class="deletetodo"><i class="fa fa-trash"></i></span> </li>'
      );
      $("#todoinput").val("");
    }
  });

  $(document.body).on("click", "#itemlist > li", function () {
    $(this).toggleClass("checked");
  });

  $(document.body).on("click", ".closenote", function () {
    $(this).closest("div.note").remove();
  });

  $("#displaytodo").click(function () {
    $(this).toggleClass("rotate");
    $("#todoinput").slideToggle("fast", function () {});
  });

  $("#addnote").click(function () {
    $("#notecontainer").prepend(
      '<div class="card note"><i class="closenote fas fa-times-circle">' +
        '</i><div class="notetitle scrollwheel"><h2 contenteditable="true" class="smalltitle">' +
        'Thy Title!</h2></div><div class="notecontent scrollwheel">' +
        '<p contenteditable="true" class="text">I want to note something!</p></div>'
    );
  });

  $(document.body).on("click", ".deletetodo", function () {
    $(this).closest("li").remove();
  });
});
