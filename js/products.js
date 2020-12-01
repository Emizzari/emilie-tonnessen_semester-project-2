import mobileMenu from "./components/menu/mobile-menu.js";
import { productsURL } from "./components/settings/url.js";
import { createProduct } from "./components/html/createProduct.js";
import { fetchAPI } from "./components/settings/fetchAPI.js";
import countStorage from "./components/storage/countStorage.js";
import { searchProducts } from "./components/search/searchProducts.js";

fetchAPI(createProduct, productsURL);
countStorage();
fetchAPI(searchProducts, productsURL);