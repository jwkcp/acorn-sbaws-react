import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
    const options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    // console.log("asdf: " + options.url);

    return fetch(options.url, options).then((response) => {
        // response.json().then((json) => {
        //     if (!response.ok) {
        //         return Promise.reject(json);
        //     }
        //     console.log("!!!:", json);
        // });
        return response;
        response.json().then((json) => {
            if (!response.ok) {
                console.log("REJECTED!!");
                return Promise.reject(json);
            }

            console.log("OK: ", json);
            return json;
        });
    });
}
