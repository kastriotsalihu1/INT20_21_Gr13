import { READY_STATE_CODE, SUCCESS_CODE } from "../../scripts/constants/constants.js";

export const makeHTTPRequest = (method, url, requestHeaders, requestBody) => {
    return new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == READY_STATE_CODE && this.status == SUCCESS_CODE) {
                resolve(this.responseText);
            }
        };
        xmlhttp.open(method, url, true);
        requestHeaders?.forEach(header => {
            xmlhttp.setRequestHeader(header.name, header.value)
        });
        xmlhttp.send(requestBody);
    })
}

export const makeRequest = (method, url, callback, requestHeaders, requestBody) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == READY_STATE_CODE && this.status == SUCCESS_CODE) {
            callback(this.responseText);
        }
    };
    xmlhttp.open(method, url, true);
    requestHeaders?.forEach(header => {
        xmlhttp.setRequestHeader(header.name, header.value)
    });
    xmlhttp.send(requestBody);
}