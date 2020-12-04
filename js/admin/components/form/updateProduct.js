import { baseURL, productsURL } from "../../../components/settings/url.js";
import {getToken} from "../../../components/storage/localStorage.js";
import displayMessage from "../../../components/messages/displayMessage.js";
import {fetchAPI} from "../../../components/settings/fetchAPI.js";
import {productMenu} from "../../components/menu/productMenu.js";

const token = getToken(); 

export async function updateProduct(image, title, price, description, featured, id) {
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