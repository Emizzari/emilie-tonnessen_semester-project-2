import displayMessage from "../components/messages/displayMessage.js";
import {baseURL} from "../settings/api.js";
import {saveToken, saveUser} from "../components/localStorage.js";

/* Declaring Variables: */
const form = document.querySelector(".form-login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

/* Submit Form: */
function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("feedback feedback--error", "Please insert a password or a username", ".message-container");
    }

    doLogin(usernameValue, passwordValue);
}

/* Login: */
async function doLogin(username, password) {
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
        console.log(json);

        if (json.user) {
            // displayMessage("Successfully logged in", ".message-container");

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/admin/edit-product.html?id=1";
        }

        if (json.error) {
            displayMessage("feedback feedback--error", "Invalid login details", ".message-container");
        }
    } catch (error) {
        console.log(error);
        displayMessage("feedback feedback--error", "Invalid login details", ".message-container");
    }
}
