import "./jquery.js";

const pageNames = {
    home: "home",
    todo: "todo",
    grades: "grades",
    pomodoro: "pomodoro",
    store: "store",
};
var activePageName;
const pages = $(document).children(".nav-icons").children("<a>");
console.log(pages)
// const pages = document.getElementsByClassName("nav-icons").children();

$(document).ready(function () {
    // keep track of what page is open using the navbar (sidebar)
    $(".nav-icons i").on("click", function () {
        let previous = $(this).parent().find(".activePage");
        // if a new button was clicked
        if (previous.attr("id") != $(this).attr("id")) {
            previous.removeClass("activePage");
            $(this).addClass("activePage");
        }
    });
    $("#notification").on("click", function () {
        notificationCount--;
        $("#notification").attr("data-badge", notificationCount);
    });
});



