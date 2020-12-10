import mobileMenu from "./components/menu/mobile-menu.js";
import { bannerURL, productsURL } from "./components/settings/url.js";
import { createBanner } from "./components/html/createBanner.js";
import { createFeaturedProducts } from "./components/html/createFeaturedProducts.js";
import { fetchAPI } from "./components/settings/fetchAPI.js";
import countTotalItems from "./components/storage/countStorage.js";
import { search, redirectUser } from "./components/search/searchUtils.js";

fetchAPI(createBanner, bannerURL);
fetchAPI(createFeaturedProducts, productsURL);
countTotalItems();
search.addEventListener("click", redirectUser);