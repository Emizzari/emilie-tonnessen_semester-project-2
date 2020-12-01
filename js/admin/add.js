import displayMessage from "../components/messages/displayMessage.js";
import {baseURL, productsURL} from "../settings/api.js";
import {getToken} from "../components/localStorage.js";
import {fetchAPI} from "../fetchAPI.js";
import {productMenu} from "./productMenu.js";

// Redirecting to homepage if they are not logged in
const token = getToken();

if (!token) {
    location.href = "/admin";
}

// Display Product Menu
fetchAPI(productMenu, productsURL);

// Container Variables
const form = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".edit__form__feedback");
const loading = document.querySelector(".loader");
const image = document.querySelector("#image");
const featured = document.querySelectorAll(".featured");
const featuredFalse = document.querySelector("#featured__false");
const labelFalse = document.querySelector(".featured__false");
const labelTrue = document.querySelector(".featured__true");
const featuredTrue = document.querySelector("#featured__true");

// Listen for button click
form.addEventListener("submit", submitForm);

// Submit Form Function
function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const imageValue = image.value;
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    let featuredValue;
    
    if(featuredTrue.checked){
        featuredValue = true;
    } else{
        featuredValue = false;
    }

    if (
        imageValue === 0 ||
        titleValue.length === 0 || 
        priceValue.length === 0 || 
        isNaN(priceValue) || 
        descriptionValue.length === 0 ||
        featuredValue === null
        ){
        return displayMessage("feedback feedback--error", "Please supply proper values", ".edit__form__feedback");
    }

    addProduct(imageValue, titleValue, priceValue, descriptionValue, featuredValue);
}

async function addProduct(image, title, price, description, featured) {
    const url = baseURL + "/products/";

    const data = JSON.stringify({ 
        image_url: image,
        title: title, 
        price: price, 
        description: description,
        featured: featured 
    });

    //const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("feedback feedback--success", "Product Added", ".edit__form__feedback");
            fetchAPI(productMenu, productsURL);
        }

        if (json.error) {
            displayMessage("feedback feedback--error", json.message, ".edit__form__feedback");
        }
    } catch (error) {
        console.log(error);
        displayMessage("feedback feedback--error", json.message, ".edit__form__feedback");
    }
}