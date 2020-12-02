export default $(document).ready(function(){
	$('.nav__menu-icon').click(function(){
		$(this).toggleClass('open');

		if($(this).hasClass('open')) {
			// Customer face
			$('.nav__menu').addClass('open-menu');
			$('body').addClass('fixed');

			// Admin
			$('.product-menu').addClass('product-menu--open');

		} else {
			// Customer Face
			$('.nav__menu').removeClass('open-menu');
			$('body').removeClass('fixed');

			// Admin
			$('.product-menu').removeClass('product-menu--open');

		}
	});
});