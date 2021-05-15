import { SUCCESS_CODE } from "./constants/constants.js";


const getProducts = () => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == SUCCESS_CODE) {
            const products = JSON.parse(this.responseText);
            const productCategories = {};

            products.forEach(product => {
                if (productCategories[product.name])
                    productCategories[product.name].push(product);
                else
                    productCategories[product.name] = [product];

                if (product.discountPercentage && product.discountPercentage > 0) {
                    console.log("added")
                    const featuredProductDiv = new FeaturedProduct(product.id, product.name, product.price, product.imageSrc, product.color, product.discountPercentage).getDiv();
                    $("#featuredcontainer").append(featuredProductDiv);
                }
            });

            for (const productCategory in productCategories) {
                const category = productCategories[productCategory];
                const randomElementIndex = Math.floor(Math.random() * category.length);
                const product = category[randomElementIndex];
                const productDiv = new Product(product.id, product.name, product.price, product.imageSrc, product.color).getDiv();
                $("#latest").find(".products").append(productDiv);
            }
        }
    };
    xmlhttp.open("GET", "modules/getProducts.php", true);
    xmlhttp.send();
}

$(document).ready(function () {

    getProducts()

    $(".colorswitcher button").on("click", function () {
        // when a button that controls the color of the product is cliked
        // replace the existing image with the image of the product with that color


    });

    $(document).on("click", ".addToCart", function () {
        const getImageURLFromCss = bgImageCss => {
            // url("source")
            return bgImageCss.substring(5, bgImageCss.length - 2);
        }
        if (document.getElementById("cart").children.length < 9) {
            const details = $(this).siblings(".details"),
                productName = details.children("h2").html(),
                productPrice = details.children("p").html(),
                image = getImageURLFromCss($(this).parent().siblings(".top").css("background-image")),
                id = $(this).parent().parent().attr("id");

            // create the new div to be inserted at the cart
            const newProduct = new OnCartProduct(id, productName, productPrice, image);
            const newDiv = newProduct.getDiv();
            //apend the div to the cart
            $("#cart").append(newDiv);

            //keep scrollbar at bottom
            const d = document.getElementById('cart');
            if (d.scrollHeight > d.clientHeight)
                d.scrollTop = d.scrollHeight - d.clientHeight;

            if (document.getElementById("cart").children.length == 9)
                $(".addToCart").css('cursor', 'not-allowed');
        }
    });

    $(document).on("mouseenter mouseleave", ".inside", function () {
        // if the details have already been defined then leave
        if (this.querySelector(".contents").innerHTML.trim()) return;
        getProductDetails($(this).parent().attr("id"));
    });

    $("#cart").on("click", ".removeFromCart", function () {
        $(this).parent().parent().remove();
        $('.addToCart').css('cursor', 'pointer');
    });
});


// Constructor function for Person objects
function OnCartProduct(id, name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.className = "onCartProduct";
    this.getDiv = function () {
        return $(`
        <div class="card product ${this.className}" id="${id}">\
            <div class="top" style="background-image: url(${this.image});"></div>\
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

function Product(id, name, price, image, color) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.color = color;

    this.getDiv = function () {
        return $(`
            <div class="card product" id="${this.id}">
                <div class="top" style="background-image: url(${this.image});"></div>
                <div class="inside">
                    <div class="icon">
                        <i class="fa fa-info" aria-hidden="true"></i>
                    </div>
                    <div class="contents">
                    </div>
                </div>
                <div class="bottom">
                    <div class="details">
                        <h2>${this.name}</h2>
                        <p>&#8364;${this.price}</p>
                    </div>
                    <div class="colorswitcher">
                        <button type="button" id="red" class="${this.color === "red" ? "activeColor" : ""}"></button>
                        <button type="button" id="blue" class="${this.color === "blue" ? "activeColor" : ""}"></button>
                        <button type="button" id="green" class="${this.color === "green" ? "activeColor" : ""}"></button>
                        <button type="button" id="purple" class="${this.color === "purple" ? "activeColor" : ""}"></button>
                    </div>
                    <div class="buy addToCart">
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        `)
    }
}

const getProductDetails = (productId) => {
    if (!productId) return;
    console.log(productId)

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == SUCCESS_CODE) {
            document.getElementById(productId).querySelector(".contents").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "modules/getProductDetails.php?q=" + productId, true);
    xmlhttp.send();
}



function FeaturedProduct(id, name, price, image, color, discountPercentage) {
    this.id = id;
    this.name = name;
    this.price = Math.round(price);
    this.image = image;
    this.color = color;
    this.oldPrice = parseFloat(this.price) + parseFloat(this.price) * discountPercentage;
    this.oldPrice = this.oldPrice.toFixed(0);

    this.getDiv = function () {
        return $(`
            <div class="card product featuredProduct" id="${this.id}">
                <div class="top" style="background-image: url(${this.image});"></div>

                <div class="bottom">
                    <div class="details">
                        <h2>${this.name}</h2>
                        <p><span class="oldPrice">&#8364;${this.oldPrice}</span> - &#8364;${this.price}</p>
                    </div>
                    <div class="buy addToCart">
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>

                <div class="inside">
                    <div class="icon">
                        <i class="fa fa-info" aria-hidden="true"></i>
                    </div>
                    <div class="contents">
                    </div>
                </div>
            </div>
        `);
    }
}
