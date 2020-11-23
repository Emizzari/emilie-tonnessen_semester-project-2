import mobileMenu from "./components/mobile-menu.js";
import { productsURL } from "./settings/api.js";
import { createProduct } from "./dom/createProduct.js";
import { fetchAPI } from "./fetchAPI.js";

fetchAPI(createProduct, productsURL);