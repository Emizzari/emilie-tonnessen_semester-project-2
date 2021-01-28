export function createBanner(item){
	const bannerContainer = document.querySelector(".hero__banner");
	bannerContainer.style.background=`url("${item.hero_banner.url}")`;
}