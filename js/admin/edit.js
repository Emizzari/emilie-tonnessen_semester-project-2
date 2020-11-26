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
const image = document.querySelector("#image");
const featured = document.querySelector("#featured");

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        image.value = details.image_url;
        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        featured.value = details.featured;
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

    const imageValue = image.value;
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const featuredValue = featured.value;
    const idValue = idInput.value;

    if (
        imageValue === 0 ||
        titleValue.length === 0 || 
        priceValue.length === 0 || 
        isNaN(priceValue) || 
        descriptionValue.length === 0 ||
        featuredValue === 0
        ){
        return displayMessage("feedback feedback--error", "Please supply proper values", ".edit__form__feedback");
    }

    updateProduct(imageValue, titleValue, priceValue, descriptionValue, featuredValue, idValue);
}

async function updateProduct(image, title, price, description, featured, id) {
    const url = baseURL + "/products/" + id;
    const data = JSON.stringify({ 
        image_url: image,
        title: title, 
        price: price, 
        description: description,
        featured: featured 
    });

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
            displayMessage("feedback feedback--success", "Product updated", ".edit__form__feedback");
            fetchAPI(productMenu, productsURL);
        }

        if (json.error) {
            displayMessage("feedback feedback--error", json.message, ".edit__form__feedback");
        }
    } catch (error) {
        console.log(error);
    }
} 