import mobileMenu from "./components/menu/mobile-menu.js";
import { detailsURL } from "./components/settings/url.js";
import { createDetails } from "./components/html/createDetails.js";
import { fetchAPI } from "./components/settings/fetchAPI.js";
import countStorage from "./components/storage/countStorage.js";

fetchAPI(createDetails, detailsURL);
countStorage();