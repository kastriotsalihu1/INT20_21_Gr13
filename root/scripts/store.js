import { getAllProducts, getProduct, getProductDetails } from "./services/storeService.js";

let productCategories = {};

$(document).ready(function () {

    getAllProducts()
        .then(response => {
            productCategories = JSON.parse(response);
            renderProducts(productCategories);
            renderFeaturedProducts();
        })
        .catch(err => console.log(err))

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    $(document).on("click", ".colorswitcher button", function () {
        // when a button that controls the color of the product is cliked
        // replace the existing image with the image of the product with that color

        const newColor = $(this).attr("id");
        const previousButton = $(this).parent().find('.activeColor')
        // if the active button has been clicked ignore it
        const previousColor = previousButton.attr("id");
        if (newColor === previousColor) return;

        const product = $(this).parent().parent().parent();

        const productName = $(this).parent().siblings(".details").children("h2").html();

        getProduct({ name: productName, color: newColor })
            .then(response => {
                const newProductProperties = JSON.parse(response);
                $(this).parent().siblings(".details").children("p").text(newProductProperties.price);
                product.attr("id", newProductProperties.id);
                product.children(".top").css("background-image", `url(${newProductProperties.imageSrc})`);

                // if a new button has been clicked, set it as the active one
                previousButton.removeClass('activeColor');
                $(this).addClass('activeColor');
            })
    });

    /**
     * Add event listener for the button to add a product to the user cart
     */
    $(document).on("click", ".addToCart", function () {
        const getImageURLFromCss = bgImageCss => {
            // background image in css is in the format of: {url("source")}
            return bgImageCss.substring(5, bgImageCss.length - 2);
        }

        const bringDownScrollbarPosition = (elementId) => {
            //keep scrollbar at bottom
            const d = document.getElementById(elementId);
            if (d.scrollHeight > d.clientHeight)
                d.scrollTop = d.scrollHeight - d.clientHeight;
        }

        if (document.getElementById("cart").children.length < 9) {
            const details = $(this).siblings(".details"),
                productName = details.children("h2").html(),
                productPrice = details.children("p").html(),
                image = getImageURLFromCss($(this).parent().siblings(".top").css("background-image")),
                id = $(this).parent().parent().attr("id");

            //apend new div to the cart
            $("#cart").append(new OnCartProduct(id, productName, productPrice, image).getDiv());

            bringDownScrollbarPosition("cart");

            // only allow a certain number of products in cart
            if (document.getElementById("cart").children.length == 9)
                $(".addToCart").css('cursor', 'not-allowed');
        }
    });

    $(document).on("mouseenter mouseleave", ".inside", function () {
        // if the details have already been defined then no need to get them again from db
        if (this.querySelector(".contents").innerHTML.trim()) return;

        const productId = $(this).parent().attr("id");

        getProductDetails(productId)
            .then(response => {
                document.getElementById(productId).querySelector(".contents").innerHTML = response;
            })
            .catch(err => console.log(err))
    });

    $("#cart").on("click", ".removeFromCart", function () {
        $(this).parent().parent().remove();
        $('.addToCart').css('cursor', 'pointer');
    });
});


const renderProducts = (productCategories) => {
    for (const productCategory in productCategories) {
        const category = productCategories[productCategory];
        const product = category[0];
        const productDiv = new Product(product.id, product.name, product.price, product.imageSrc, product.color).getDiv();
        $("#latest").find(".products").append(productDiv);
    }
}
const renderFeaturedProducts = () => {
    for (const productCategory in productCategories) {
        productCategories[productCategory].forEach(product => {
            if (product.discountPercentage && product.discountPercentage > 0) {
                const featuredProductDiv = new FeaturedProduct(product.id, product.name, product.price, product.imageSrc, product.color, product.discountPercentage).getDiv();
                $("#featuredcontainer").append(featuredProductDiv);
            }
        });
    }
}


/**
 * Create object to genereate div for products that are featured (have discount, are recommended etc.)
 * @param {Integer} id Product id from db
 * @param {*} name 
 * @param {*} price 
 * @param {*} image 
 * @param {*} color 
 * @param {*} discountPercentage 
 */
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

/**
* Create object to genereate div for product
* @param {Integer} id product id in db
* @param {*} name Product name
* @param {*} price Product price
* @param {*} image Product image
* @param {*} color Product color
*/
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


/**
 * Create new object to genereate the div for the product that has been added to the cart
 * @param {Integer} id Productid on db
 * @param {*} name Product name
 * @param {*} price Product price
 * @param {*} image Product image URL
*/
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
            </div>`
        );
    };
}

