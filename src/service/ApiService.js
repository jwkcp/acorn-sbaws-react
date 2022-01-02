import { API_BASE_URL } from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    var options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
        .then((response) =>
            response.json().then((json) => {
                console.log("Before response ok check");
                if (!response.ok) {
                    return Promise.reject(json);
                }

                return json;
            })
        )
        .catch((error) => {
            console.log("error occured");
            console.log(error.status);
            // if (error.status === 403) {
            window.location.href = "/login";
            // }

            return Promise.reject(error);
        });
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO).then((response) => {
        console.log("response: ", response);
        alert("Login Token: " + response.token);

        localStorage.setItem(ACCESS_TOKEN, response.token);

        if (response.token) {
            window.location.href = "/";
        }
    });
}
