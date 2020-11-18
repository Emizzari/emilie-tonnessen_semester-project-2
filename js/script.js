/* Mobile menu: --------------------------------- */
$(document).ready(function(){
	$('.nav__menu-icon').click(function(){
		$(this).toggleClass('open');

		if($(this).hasClass('open')) {
			$('.nav__menu').addClass('open-menu');
			$('body').addClass('fixed');
		} else {
			$('.nav__menu').removeClass('open-menu');
			$('body').removeClass('fixed');
		}
	});
});
/* ---------------------------------------------- */
/* HERO BANNER: --------------------------------- */


async function fetchAPI() {
    try {
		/* Products API: */
        const productResponse = await fetch(productsURL);
        const ProductJson = await productResponse.json();
		const product = ProductJson;

		/* Banner API: */
		const bannerResponse = await fetch(bannerURL);
        const bannerJson = await bannerResponse.json();
		const banner = bannerJson;
		
		createBanner(banner);


		console.log(product);
		console.log(banner.hero_banner);

       /*  createHTML(product);
        searchProducts(product); */

    } catch (error) {
        console.log(error);
        /* displayMessage("error", error, ".product-container");    */
    }
}
