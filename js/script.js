import mobileMenu from "./components/mobile-menu.js";
import { detailsURL, productsURL, bannerURL } from "./settings/api.js";
import { createBanner } from "./dom/createBanner.js";
import { createProduct } from "./dom/createProduct.js";





/* HERO BANNER: --------------------------------- */


async function fetchAPI() {
    try {
		/* Products API: */
        const productResponse = await fetch(productsURL);
        const ProductJson = await productResponse.json();
        const product = ProductJson;
        //console.log(product);

        /* Details API: */
        const detailsResponse = await fetch(detailsURL);
        const detailsJson = await detailsResponse.json();
        const details = detailsJson;
        console.log(details);

		/* Banner API: */
		const bannerResponse = await fetch(bannerURL);
        const bannerJson = await bannerResponse.json();
        const banner = bannerJson;
        //console.log(banner.hero_banner);
		
		
        createProduct(product);
        createDetails(details);
        //createBanner(banner);

		


       /*  createHTML(product);
        searchProducts(product); */

    } catch (error) {
        console.log(error);
        /* displayMessage("error", error, ".product-container");    */
    }
}

fetchAPI();




// Looking for the id parameter
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    console.log("error");
}

console.log(id);


function createDetails(detail) {



    // Document title
    document.title = `Varus Cosmetics | ${detail.title}`;

    // Image
    const characterImage = document.querySelector(".details-image");
    characterImage.src = result.image;
    characterImage.alt = result.name;

    // Heading
    const characterName = document.querySelector("h1");
    characterName.innerHTML = result.name;

    // Status
    const statusValue = document.querySelector("#status");
    statusValue.innerHTML = result.status;

    // Species
    const speciesValue = document.querySelector("#species");
    speciesValue.innerHTML = result.species;

    // Origin
    const originValue = document.querySelector("#origin");
    originValue.innerHTML = result.origin.name;

    // Loaction
    const locationValue = document.querySelector("#location");
    locationValue.innerHTML = result.location.name;
}

createDetails();