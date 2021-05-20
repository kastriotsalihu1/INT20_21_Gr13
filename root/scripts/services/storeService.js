import { makeHTTPRequest } from "../../modules/dbRequests/XMHttpRequest.js";

export const getAllProducts = () => {
    return makeHTTPRequest("GET", "php/store/getProducts.php");
}

export const getProduct = (productProperties) => {
    const conditions = [];
    for (const property in productProperties) {
        conditions.push(`${property}=${productProperties[property]}`)
    }
    const condition = conditions.join("&");

    return makeHTTPRequest("GET", "php/store/getProduct.php?" + condition);
}

export const getProductDetails = (productId) => {
    return makeHTTPRequest("GET", "php/store/getProductDetails.php?q=" + productId);
}

