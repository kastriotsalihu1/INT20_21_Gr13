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
    $('.nav-icons i').on('click', function () {

        notificationCount++;
        $("#notification").attr("data-badge", notificationCount);

        let previous = $(this).parent().find('.active');
        if (previous.attr("id") != $(this).attr("id")) {
            previous.removeClass('active');
            $(this).addClass('active');

            $(card).eq(Math.floor(Math.random() * card.length)).css(
                'background-color',
                `rgba(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256}, ${Math.random()})`
            );
        }
    });
    $('#notification').on('click', function(){
        notificationCount--;
        $("#notification").attr("data-badge", notificationCount);
    });
});