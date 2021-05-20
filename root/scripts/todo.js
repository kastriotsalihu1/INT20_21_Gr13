$(document).ready(function () {
  $("#todoinput").keypress(function (event) {

    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13" && $("#todoinput").val() != "") {
      event.preventDefault();
      $("#itemlist").append(
        '<li draggable="true"><span class="text todotext">' +
          $("#todoinput").val() +
          '</span><span class="deletetodo"><i class="fa fa-trash"></i></span> </li>'
      );
      var addlisteners = document.querySelector("#itemlist li");
      dragAndDrop(addlisteners);

      $.ajax({
        url: '../root/php/todo/setTodo.php',
        type: 'POST',
        data: {
            todoinput: $("#todoinput").val()
        },
        success: function(msg) {
          $("#todoinput").val("");
        }               
    });

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
        '</i>    <i class="dragnote fas fa-grip-horizontal"></i><div class="notetitle scrollwheel"><h2 contenteditable="true" class="smalltitle">' +
        'Thy Title!</h2></div><div class="notecontent scrollwheel">' +
        '<p contenteditable="true" class="text">I want to note something!</p></div>'
    );
  });

  $(document.body).on("click", ".deletetodo", function () {
    $.ajax({
      url: '../root/php/todo/removeTodo.php',
      type: 'POST',
      data: {
          id:  $(this).closest('li').attr('id')
      },
      success: function(msg) {
        console.log("removed " + $(this).closest('li').attr('id'))
        $(this).closest("li").remove();
      }              
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
    
    var transferedClass = dragSrcEl.classList;
    dragSrcEl.classList = this.classList;
    this.classList = transferedClass;
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