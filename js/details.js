import mobileMenu from "./components/mobile-menu.js";
import { detailsURL } from "./settings/api.js";
import { createDetails } from "./dom/createDetails.js";
import { fetchAPI } from "./fetchAPI.js";
import countTotalItems from "./components/countTotalItems.js";

fetchAPI(createDetails, detailsURL);
countTotalItems();