import mobileMenu from "./components/menu/mobile-menu.js";
import { detailsURL } from "./components/html/createDetails.js";
import { createDetails } from "./components/html/createDetails.js";
import { fetchAPI } from "./components/settings/fetchAPI.js";
import countStorage from "./components/storage/countStorage.js";
import { search, redirectUser } from "./components/search/searchUtils.js";

fetchAPI(createDetails, detailsURL);
countStorage();
search.addEventListener("click", redirectUser);