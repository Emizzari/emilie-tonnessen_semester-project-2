import mobileMenu from "./components/mobile-menu.js";
import { detailsURL, productsURL, bannerURL } from "./settings/api.js";
import { createBanner } from "./dom/createBanner.js";
import { createProduct } from "./dom/createProduct.js";
import { createDetails } from "./dom/createDetails.js";


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
        // console.log(details);

		/* Banner API: */
		const bannerResponse = await fetch(bannerURL);
        const bannerJson = await bannerResponse.json();
        const banner = bannerJson;
        //console.log(banner.hero_banner);
		
		createDetails(details);
        createProduct(product);
        createBanner(banner);

		


       /*  createHTML(product);
        searchProducts(product); */

    } catch (error) {
        console.log(error);
        /* displayMessage("error", error, ".product-container");    */
    }
}

fetchAPI();