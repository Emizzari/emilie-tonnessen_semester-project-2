import {baseURL} from "../settings/url.js";

export function createBanner(item){
	const bannerContainer = document.querySelector(".hero__banner");
	bannerContainer.style.background=`url("${baseURL}${item.hero_banner.url}")`;
}