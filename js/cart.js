import mobileMenu from "./components/mobile-menu.js";
import countTotalItems from "./components/countTotalItems.js";
import { createShoppingCart } from "./dom/createShoppingCart.js";
import { createFeaturedProducts } from "./dom/createFeaturedProducts.js";
import { productsURL } from "./settings/api.js";
import { fetchAPI } from "./fetchAPI.js";

fetchAPI(createFeaturedProducts, productsURL);
createShoppingCart();
countTotalItems();