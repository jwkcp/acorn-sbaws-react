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

    console.log("Before fetch")
    return fetch(options.url, options).then((response) => {
        console.log("Inside fetch start")
        // response.json().then((json) => {
        //     if (!response.ok) {
        //         return Promise.reject(json);
        //     }
        //     console.log("!!!:", json);
        // });

        // return response;

        response.json().then((json) => {
            console.log("Before response ok check")
            if (!response.ok) {
                console.log("REJECTED!!");
                return Promise.reject(json);
            }

            console.log("OK: ", json);
            return json;
        });
        console.log("Inside fetch end")
    });
    console.log("After fetch")
}
