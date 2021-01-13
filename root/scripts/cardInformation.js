import "./jquery.js";

$(document).ready(function () {
    $(".information .icon").on("click", function () {
        // expand the information div
        $(this).parent().toggleClass("displayInfo");
    });

    $(document.body).dblclick(() => {
        //hide all information divs
        $(".card .information").removeClass("displayInfo");
    });
});
