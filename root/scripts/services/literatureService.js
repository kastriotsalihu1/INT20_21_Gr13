import { makeHTTPRequest } from "../../modules/dbRequests/XMHttpRequest.js";

export const addSubject = requestBody => {
    const requestHeaders = [
        { name: "Content-type", value: "application/x-www-form-urlencoded" },
    ]

    return makeHTTPRequest("POST", "php/literature/addSubject.php", requestHeaders, requestBody);
}

export const uploadLiterature = () => {
    return makeHTTPRequest("POST", "php/literature/uploadLiterature.php");
}