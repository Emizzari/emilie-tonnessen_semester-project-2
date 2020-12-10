import { baseURL, productsURL } from "../../../components/settings/url.js";
import { token } from "../../../components/storage/localStorage.js";
import { productMenu } from "../menu/productMenu.js";
import displayMessage from "../../../components/messages/displayMessage.js";
import { fetchAPI } from "../../../components/settings/fetchAPI.js";

export async function addProduct(image, title, price, description, featured) {
    const url = baseURL + "/products/";

    const data = JSON.stringify({ 
        image_url: image,
        title: title, 
        price: price, 
        description: description,
        featured: featured 
    });

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
            displayMessage(
                "feedback feedback--success", 
                "Product Added", 
                ".feedback"
            );
            
            fetchAPI(productMenu, productsURL);
        }

        if (json.error) {
            displayMessage(
                "feedback feedback--error", 
                json.message, 
                ".feedback"
            );
        }
    } catch (error) {
        console.log(error);
    }
}