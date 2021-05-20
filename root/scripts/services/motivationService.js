import { makeHTTPRequest } from "../../modules/dbRequests/XMHttpRequest.js"


export const getMotivationalQuote = () => {
    return makeHTTPRequest("GET", "php/home/getMotivation.php");
}