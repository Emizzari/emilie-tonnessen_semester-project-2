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

/* Redirects if to homepage if no products are chosen. Dont think its necesarry? */
/* if (!id) {
    document.location.href = "/";
} */

const productUrl = baseURL + "/products/" + id;

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

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("Please supply proper values", ".edit__form__feedback");
    }

    updateProduct(titleValue, priceValue, descriptionValue, idValue);
}

async function updateProduct(title, price, description, id) {
    const url = baseURL + "/products/" + id;
    const data = JSON.stringify({ title: title, price: price, description: description });

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
            displayMessage("Product updated", ".edit__form__feedback");
            fetchAPI(productMenu, productsURL);
        }

        if (json.error) {
            displayMessage(json.message, ".edit__form__feedback");
        }
    } catch (error) {
        console.log(error);
    }
} 