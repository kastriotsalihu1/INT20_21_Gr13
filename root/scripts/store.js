$(document).ready(function () {
    $(".product").not(".onCartProduct").children(".top").each(function () {
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
    $(".addToCart").click(function () {
        if (document.getElementById("cart").children.length < 9) {
            let details = $(this).siblings(".details");
            let productName = details.children("h2").html(),
                productPrice = details.children("p").html(),
                image = getProductImageNameFromUrl($(this).parent().siblings(".top").css("background-image"));

            // create the new div to be inserted at the cart
            let newProduct = new OnCartProduct(productName, productPrice, image);
            let newDiv = newProduct.getDiv();

            //apend the div to the cart
            $("#cart").append(newDiv);

            //keep scrollbar at bottom
            var d = document.getElementById('cart');
            if (d.scrollHeight > d.clientHeight)
                d.scrollTop = d.scrollHeight - d.clientHeight;

            if (document.getElementById("cart").children.length == 9)
                $(".addToCart").css('cursor', 'not-allowed');
        }
    });
    $("#cart").on("click", ".removeFromCart", function () {
        $(this).parent().parent().remove();
        $('.addToCart').css('cursor', 'pointer');
    });
});


// Constructor function for Person objects
function OnCartProduct(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.getDiv = function () {
        return $(`
        <div class="card product ${this.className}">\
            <div class="top" style="background-image: url('images/store/${this.image}');"></div>\
            <div class="bottom">\
            <div class="details">\
                <h2>${this.name}</h2>\
                <p>${this.price}</p>\
            </div>\
            <div class="buy removeFromCart">\
                <i class="fa fa-times"></i>\
            </div>\
            </div>\
        </div>`);
    };
}
OnCartProduct.prototype.className = "onCartProduct";


function getProductImageNameFromUrl(url) {
    // the format of the backgroudn image is 
    // url(" <path-to-image>/<image> ")
    let slicedSource = url.split("/");
    //remove the    {  ")   }
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
