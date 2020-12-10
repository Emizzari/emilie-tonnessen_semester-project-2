import { getShoppingCart } from "../storage/localStorage.js";
import {productsURL} from "../settings/url.js";

// Looking for the id parameter
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// Setting the "id" variable
let id;

// Looking for "id" in the url
if (params.has("id")) {
    id = params.get("id");
} else {
    console.log("error in 'id' if statement");
}

export const detailsURL = `${productsURL}${id}`;

/* Function - changes the property matching the correct id */
export function createDetails(detail) {
    // Document title
    document.title = `Varus Cosmetics | ${detail.title}`;

    // Breadcrumb title
    const detailsBreadcrumb = document.querySelector(".breadcrumb__item--active")
    detailsBreadcrumb.innerHTML = detail.title;

    // Image
    const detailsImage = document.querySelector(".details__images img");
    detailsImage.src = detail.image_url;
    detailsImage.alt = detail.title; 

    // Product Title
    const detailsTitle = document.querySelector(".details__title");
    detailsTitle.innerHTML = detail.title;

    // Price
    const detailsPrice = document.querySelector(".details__price");
    detailsPrice.innerHTML = detail.price + " NOK";

    // Description
    const detailsDesc = document.querySelector(".details__description");
    detailsDesc.innerHTML = detail.description;

    // Data Attributes
    const detailsBtn = document.querySelector(".details__btn");
    detailsBtn.dataset.id = detail.id;
    detailsBtn.dataset.title = detail.title;
    detailsBtn.dataset.description = detail.description;
    detailsBtn.dataset.price = detail.price;
    detailsBtn.dataset.image = detail.image_url;
    detailsBtn.dataset.url = `./details.html?id=${detail.id}`;
    detailsBtn.href = `./details.html?id=${detail.id}`;

    // LocalStorage():
    const addToCartBtn = document.querySelectorAll(".details__btn");

    addToCartBtn.forEach((button) => {
        button.addEventListener("click", handleAddToCartClick);
    });

    function handleAddToCartClick() {
        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const image = this.dataset.image;
        const description = this.dataset.description;
        const url = this.dataset.url;

        const currentCart = getShoppingCart();

        const productExists = currentCart.find(function (cart) {
            return cart.id === id;
        });

        if (productExists === undefined) {
            const product = {
                id: id,
                title: title,
                price: price,
                image: image,
                description: description,
                url: url
            };

            currentCart.push(product);
            saveFavs(currentCart);
        } else {
            const newCarts = currentCart.filter((cart) => cart.id !== id);
            saveFavs(newCarts);
        }
    }

    function saveFavs(carts) {
        localStorage.setItem("shoppingcart", JSON.stringify(carts));
    }
}