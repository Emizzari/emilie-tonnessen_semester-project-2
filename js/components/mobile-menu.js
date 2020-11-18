export default $(document).ready(function(){
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