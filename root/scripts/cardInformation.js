$(document).ready(function () {

    console.log("cardinfo", $(".information"), document);

    $(".information").on("click",".icon", function () {
        // expand the information div
        console.log(this);
        $(this).parent().toggleClass("displayInfo");
    });

    $(document.body).dblclick(() => {
        //hide all information divs
        $(".card .information").removeClass("displayInfo");
    });
});
