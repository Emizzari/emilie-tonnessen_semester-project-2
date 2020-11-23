import { baseURL } from "../settings/api.js";

// Looking for the id parameter
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// Setting the "id" variable
export let id;

// Looking for "id" in the url
if (params.has("id")) {
    id = params.get("id");
} else {
    console.log("error in if statement");
}


export function createDetails(detail) {
    // Document title
    document.title = `Varus Cosmetics | ${detail.title}`;

    // Breadcrumb title
    const detailsBreadcrumb = document.querySelector(".breadcrumb__item--active")
    detailsBreadcrumb.innerHTML = detail.title;

    // Image
    const detailsImage = document.querySelector(".details__images img");
    detailsImage.src = baseURL + detail.image.url;
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
}