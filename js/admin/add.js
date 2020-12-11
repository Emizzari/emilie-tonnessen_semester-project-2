import mobileMenu from "../components/menu/mobile-menu.js";
import { productsURL } from "../components/settings/url.js";
import { token } from "../components/storage/localStorage.js";
import { fetchAPI } from "../components/settings/fetchAPI.js";
import { productMenu} from "./components/menu/productMenu.js";
import logoutButton from "./components/buttons/logoutButton.js";
import { form } from "./components/form/containerVariables.js";
import { submitForm } from "./components/form/submitForm.js";

// Redirecting to homepage if they are not logged in
if (!token) {
    location.href = "../admin";
}

// Display Product Menu
fetchAPI(productMenu, productsURL);
logoutButton();

// Listen for button click
form.addEventListener("submit", submitForm);