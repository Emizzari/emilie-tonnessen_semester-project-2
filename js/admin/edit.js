import displayMessage from "../components/messages/displayMessage.js";
import {baseURL, productsURL} from "../settings/api.js";
import {getToken} from "../components/localStorage.js";
import deleteButton from "./deleteButton.js";
import {fetchAPI} from "../fetchAPI.js";
import {productMenu} from "./productMenu.js";

const token = getToken();

if (!token) {
    location.href = "/";
}

fetchAPI(productMenu, productsURL);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// URL
const productUrl = baseURL + "/products/" + id;

// Containers
const form = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".edit__form__feedback");
const loading = document.querySelector(".loader");

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        deleteButton(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;

    }

}

    const url = baseURL + "/products/" + id;

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            fetchAPI(productMenu, productsURL);
        }

        if (json.error) {
        }
    } catch (error) {
        console.log(error);
    }
} 