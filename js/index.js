import mobileMenu from "./components/mobile-menu.js";
import { bannerURL, productsURL } from "./settings/api.js";
import { createBanner } from "./dom/createBanner.js";
import { createFeaturedProducts } from "./dom/createFeaturedProducts.js";
import { fetchAPI } from "./fetchAPI.js";
import countTotalItems from "./components/countTotalItems.js";

fetchAPI(createBanner, bannerURL);
fetchAPI(createFeaturedProducts, productsURL);
countTotalItems();