$(document).ready(function () {
    $(".information").on("click", function () {
        // expand the information div
        $(this).toggleClass("displayInfo");
    });

    $(document.body).dblclick(() => {
        //hide all information divs
        $(".card .information").removeClass("displayInfo");
    });
});
