import mobileMenu from "./components/mobile-menu.js";
import { detailsURL } from "./settings/api.js";
import { createDetails } from "./dom/createDetails.js";
import { fetchAPI } from "./fetchAPI.js";

fetchAPI(createDetails, detailsURL);