import { baseURL } from "../../../components/settings/url.js";
import { saveToken, saveUser } from "../../../components/storage/localStorage.js";

export async function doLogin(username, password) {
    const url = baseURL + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "./edit-product.html";
        }

        if (json.error) {
            displayMessage(
                "feedback feedback--error", 
                "Invalid login details", 
                ".feedback"
                );
        }
    } catch (error) {
        console.log(error);
        displayMessage(
            "feedback feedback--error", 
            "Invalid login details", 
            ".feedback"
            );
    }
}