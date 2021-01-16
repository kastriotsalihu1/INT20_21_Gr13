var scaleRatio = 1.25;
var offset = 20;


$(document).ready(function () {

    //set the position of the scrollbar to the bottom
    // $('.content').scrollTop($('.content')[0].scrollHeight);

    $(".product .top").each(function () {
        // when the image is loaded set the active button acodingly
        // e.g. if a red version of the product is the default loaded one, then set the active button the red one

        // get the colorswitcher
        let colorswitcher = $(this).siblings(".bottom").children(".colorswitcher");
        // get the url of the background image
        let imageSource = $(this).css("background-image");

        let imageName = getProductImageNameFromUrl(imageSource);
        // the format of the image name is: <productName>-<productColor>.<imageExtension>
        let imageColor = imageName.split("-")[1].split(".")[0];
        //remove the activeColor class from the default color
        $(colorswitcher).children("#red").removeClass("activeColor");
        //set the active button, the button whose id is the same as the product color
        $(colorswitcher).children(`#${imageColor}`).addClass("activeColor");
    });
    $(".colorswitcher button").click(function () {
        // when a button that controls the color of the product is cliked
        // replace the existing image with the image of the product with that color

        // find the previous button that was clicked (was active)
        let previous = $(this).parent().find('.activeColor');
        if (previous.attr("id") != $(this).attr("id")) {
            // if a new button has been clicked, set it as the active one
            previous.removeClass('activeColor');
            $(this).addClass('activeColor');

            let top = $(this).parent().parent().siblings(".top");
            let previousImageSource = $(top).css("background-image");

            let productName = getProductNameFromUrl(previousImageSource);
            //set the image name based on the id of the button that was clicked
            let newSource = `url("images/store/${productName}-${$(this).attr("id")}.jpg")`;
            top.css("background-image", newSource);
        }
    });
    $(".tocart").click(function () {
        // product > info > button
        let product = $(this).parent().parent();
        let image = $(product).children("figure").children("img");
        let productName = $(product).children("figure").children("figcaption").children("a");
        let info = $(this).parent();

        // create the new div to be inserted at the cart
        let newDiv = $(`
        <div class='oncart'>\
            <div class='img'><img alt='' src='${$(image).attr("src")}'></div>\
            <div class='info'>\
                <a class='name' href='#'>${$(productName).html()}</a>\
                <div class='price'>\
                    Price:<span class="priceValue>${$(info).children(".price").html()}</span>\
                </div>\
                <button class="removeCart">Remove from cart</button>\
            </div>\
        </div>`);
        //apend the div to the cart
        $("#cart").append(newDiv);

        //keep the scrollbar at the bottom
        $('.content').scrollTop($('.content')[2].scrollHeight);
    });
    $("#cart").on("click", ".removeCart", function () {
        let onCartProduct;
    });
    $('.buy').click(function () {
        $(this).parent().parent().addClass("clicked");
    });

});


function getProductImageNameFromUrl(url) {
    // the format of the backgroudn image is 
    // url(" <path-to-image>/<image> ")
    let slicedSource = url.split("/");
    //remove the      ")
    return slicedSource[slicedSource.length - 1].slice(0, -2);
}

function getProductNameFromUrl(url) {
    // the format of the backgroudn image is 
    // url(" <path-to-image>/<image> ")
    let slicedSource = url.split("/");
    let productNameWithNoise = slicedSource[slicedSource.length - 1].split("-")[0];
    // the format of the image name is: <productName>-<productColor>.<imageExtension>
    return productNameWithNoise.split("-")[0];
}