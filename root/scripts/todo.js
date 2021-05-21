$(document).ready(function () {
  $("#todoinput").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13" && $("#todoinput").val() != "") {
      event.preventDefault();
      var value = "todo_";
      $.ajax({
        url: "../root/php/todo/setTodo.php",
        type: "POST",
        data: {
          todoinput: $("#todoinput").val(),
        },
        success: function (data) {
          value += data;
          $("#itemlist").prepend(
            '<li id="' +
              value +
              '" draggable="true"><span class="text todotext">' +
              $("#todoinput").val() +
              '</span><span class="deletetodo"><i class="fa fa-trash"></i></span> </li>'
          );
          var addlisteners = document.querySelector("#itemlist li");
          dragAndDrop(addlisteners);
          $("#todoinput").val("");
        },
      });
    }
  });

  $(document.body).on("click", "#itemlist > li", function () {
    var value = $(this).closest("li").attr("id");
    $(this).toggleClass("checked");
    $.ajax({
      url: "../root/php/todo/modifyTodo.php",
      type: "POST",
      data: {
        id: value,
        checked: $(this).hasClass("checked"),
        function: 0,
      },
    });
  });

  $(document.body).on("click", ".closenote", function () {
    var element = $(this).closest("div.note");
    var value = element.attr("id");

    $.ajax({
      url: "../root/php/todo/removeNote.php",
      type: "POST",
      data: {
        id: value,
      },
      success: function (msg) {
        console.log(value);
        element.remove();
      },
    });
  });

  $("#displaytodo").click(function () {
    $(this).toggleClass("rotate");
    $("#todoinput").slideToggle("fast", function () {});
  });

  $("#addnote").click(function () {
    var value = "note_";
    $.ajax({
      url: "../root/php/todo/setNote.php",
      type: "POST",
      success: function (data) {
        value += data;
        $("#notecontainer").prepend(
          '<div class="card note" id="' +
            value +
            '"><i class="closenote fas fa-times-circle">' +
            '</i>    <i class="dragnote fas fa-grip-horizontal"></i><div class="notetitle scrollwheel"><h2 contenteditable="true" class="smalltitle">' +
            'Thy Title!</h2></div><div class="notecontent scrollwheel">' +
            '<p contenteditable="true" class="text">I want to note something!</p></div>'
        );
      },
    });
  });

  $(document.body).on("click", ".deletetodo", function () {
    var value = $(this).closest("li").attr("id");
    var element = $(this).closest("li");
    $.ajax({
      url: "../root/php/todo/removeTodo.php",
      type: "POST",
      data: {
        id: value,
      },
      success: function (msg) {
        console.log(value);
        element.remove();
      },
    });
  });

  $(function () {
    $("#notecontainer").sortable({ handle: ".dragnote" });

    let items = document.querySelectorAll("#itemlist li");
    items.forEach(dragAndDrop);
  });
});

var dragSrcEl = null;
function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");

    $this = $(this);
    $source = $(dragSrcEl);

    var thisChecked = $this.hasClass("checked");
    var sourceChecked = $source.hasClass("checked");

    $this.toggleClass("checked", sourceChecked);
    $source.toggleClass("checked", thisChecked);

    var firstId = $this.attr("id");
    var secondId = $source.attr("id");

    var firstText = $this.text();
    var secondText = $source.text();

    var firstChecked = $this.hasClass("checked");
    var secondChecked = $source.hasClass("checked");

    console.log(firstId + " -- " + firstText + " -- " + firstChecked);
    $.ajax({
      url: "../root/php/todo/modifyTodo.php",
      type: "POST",
      data: {
        firstId: firstId,
        secondId: secondId,
        firstText: firstText,
        secondText: secondText,
        firstChecked: firstChecked,
        secondChecked: secondChecked,
        function: 1,
      },
    });
  }

  return false;
}

function handleDragEnd(e) {
  this.style.opacity = "1";
  let items = document.querySelectorAll("#itemlist li");
  items.forEach(function (item) {
    item.classList.remove("over");
  });
}

function dragAndDrop(item) {
  item.addEventListener("dragstart", handleDragStart, false);
  item.addEventListener("dragenter", handleDragEnter, false);
  item.addEventListener("dragover", handleDragOver, false);
  item.addEventListener("dragleave", handleDragLeave, false);
  item.addEventListener("drop", handleDrop, false);
  item.addEventListener("dragend", handleDragEnd, false);
}
