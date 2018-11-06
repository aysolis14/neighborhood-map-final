class Helper {
    static baseURL() {
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        const keys = {
            client_id: "L2ZZYOTHXSMPJWMTF1WHY2ZRULVY2XWVWP0AMRC1AD40I2LN",
            client_secret: "PVCSFUNX2V2L3ZVYAKGA5S3SQQQXHZJ0RXD2VRI2KZUOR2YN",
            v:"20181105"
        };
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlBuilder(urlPrams) {
        if(!urlPrams) {
            return ""
        }
        return Object.keys(urlPrams)
            .map(key => `${key}=${urlPrams[key]}`)
            .join("&");
    }
    static headers() {
        return {
            Accept: "application/json"
        };
    }
    static simpleFetch(endPoint, method, urlPrams) {
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
            urlPrams
        )}`,
        requestData
        ).then(res => res.json()).catch(() => alert ('Oops! Looks like something is wrong finding locations'))
    }
}
export default class SquareAPI {
    static search(urlPrams) {
        return Helper.simpleFetch("/venues/search","GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET")
    }
}