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
  };
  xmlhttp.open(
    "GET",
    "application_grades_AjaxGetMethod.php?lenda=" + str,
    true
  );
  xmlhttp.send();
}

//AJAX POST method
document.getElementById("shtoLiteraturen").addEventListener("submit", postName);
function postName(e) {
  var emri = $("#file")[0].files[0].name;
  var lenda = $("#lendet").find(":selected").val();
  var lloji = $("#lloji").find(":selected").val();

  var params = `file=${emri}&lenda=${lenda}&lloji=${lloji}`;

  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "application_grades_ajaxPostMethod.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.send(params);
}

//Click on trash icon to delete subjects
$("ul").on("click", "span", function () {
  var text = $(this)
    .parent()
    .clone() //clone the element
    .children() //select all the children
    .remove() //remove all the children
    .end() //again go back to selected element
    .text();

  $.ajax({
    url: "../root/php/grades/removeGrades.php",
    type: "POST",
    data: {
      text: text,
    },
    success: function (event) {
      console.log(event);
    },
  });
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
      var subject = $(this).val();

      event.preventDefault();
      $.ajax({
        url: "../root/php/grades/grades.php",
        type: "POST",
        data: {
          subject: subject,
        },
        success: function () {
          $("ul").prepend(
            "<li><span><i class='fas fa-trash'></i></span> " +
              subject +
              "<select id='grades'><option >5</option><option >6</option><option >7</option><option >8</option><option >9</option><option >10</option></select></li>"
          );
        },
      });
      $(this).val("");
    }
  }
});

$("li select").on("change", function (event) {
  event.preventDefault();
  var value = this.value;

  var text = $(this)
    .parent()
    .clone() //clone the element
    .children() //select all the children
    .remove() //remove all the children
    .end() //again go back to selected element
    .text();

  console.log(value + "---" + text);
  $.ajax({
    url: "../root/php/grades/modifyGrades.php",
    type: "POST",
    data: {
      text: text,
      value: value,
    },
    success: function (event) {
      console.log(event);
    },
  });
});