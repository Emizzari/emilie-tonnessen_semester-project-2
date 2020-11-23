import mobileMenu from "./components/mobile-menu.js";
import { bannerURL } from "./settings/api.js";
import { createBanner } from "./dom/createBanner.js";
import { fetchAPI } from "./fetchAPI.js";

fetchAPI(createBanner, bannerURL);