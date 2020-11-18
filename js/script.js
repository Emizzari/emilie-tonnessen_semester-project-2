import mobileMenu from "./components/mobile-menu.js";
import { createBanner } from "./dom/createBanner.js";
import { productsURL, bannerURL } from "./settings/api.js";




/* HERO BANNER: --------------------------------- */


async function fetchAPI() {
    try {
		/* Products API: */
        const productResponse = await fetch(productsURL);
        const ProductJson = await productResponse.json();
		const product = ProductJson;

		/* Banner API: */
		const bannerResponse = await fetch(bannerURL);
        const bannerJson = await bannerResponse.json();
		const banner = bannerJson;
		
		createBanner(banner);


		console.log(product);
		console.log(banner.hero_banner);

       /*  createHTML(product);
        searchProducts(product); */

    } catch (error) {
        console.log(error);
        /* displayMessage("error", error, ".product-container");    */
    }
}

fetchAPI();



/* Error Message: */
/* function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
} */
/* ---------------------------------------------- */
