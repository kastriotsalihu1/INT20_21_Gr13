
//AJAX GET method
function showLiterature(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  }
  xmlhttp.open("GET", "application_grades_ajaxGetMethod.php?lenda=" + str, true);
  xmlhttp.send();
}

//Click on trash icon to delete subjects
$("ul").on("click", "span", function () {
  //this=span
  $(this)
    .parent()
    .fadeOut(500, function () {
      //this=li
      $(this).remove();
    });
});

//Inserting new subjects
$("input").keypress(function (event) {
  if (event.which === 13) {
    if ($(this).val() === "") {
      alert("No blank values allowed");
    } else if ($(this).val() !== "") {
      //grabbiing subjects text from input
      var notat = $(this).val();
      //me e fshi qka kena shkru n input
      $(this).val("");
      //create a new li and add to ul4
      // jo me "" po me ''
      $("ul").append(
        "<li><span><i class='fas fa-trash'></i></span> " + notat +
        "<select id='grades'><option >6</option><option >7</option><option >8</option><option >9</option><option >10</option></select></li>"
      );
    }
  }
});


