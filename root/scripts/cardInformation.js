$(document).ready(function () {

    $(document.body).on("click",".information", function () {
        // expand the information div
        console.log(this);
        $(this).toggleClass("displayInfo");
    });

    $(document.body).dblclick(() => {
        //hide all information divs
        $(".card .information").removeClass("displayInfo");
    });
});
