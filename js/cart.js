import mobileMenu from "./components/menu/mobile-menu.js";
import countStorage from "./components/storage/countStorage.js";
import { createShoppingCart } from "./components/html/createShoppingCart.js";
import { createFeaturedProducts } from "./components/html/createFeaturedProducts.js";
import { productsURL } from "./components/settings/url.js";
import { fetchAPI } from "./components/settings/fetchAPI.js";

fetchAPI(createFeaturedProducts, productsURL);
createShoppingCart();
countStorage();