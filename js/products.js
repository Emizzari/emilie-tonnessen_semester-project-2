import mobileMenu from "./components/mobile-menu.js";
import { productsURL } from "./settings/api.js";
import { createProduct } from "./dom/createProduct.js";
import { fetchAPI } from "./fetchAPI.js";
import countTotalItems from "./components/countTotalItems.js";
import { searchProducts } from "./components/search/searchProducts.js";

fetchAPI(createProduct, productsURL);
countTotalItems();
fetchAPI(searchProducts, productsURL);