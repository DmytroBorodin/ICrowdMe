$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$('.header__slider').slick({
	infinite: true,
	nextArrow: '<i class="fas fa-chevron-right r-arrow arrow"></i>',
	prevArrow: '<i class="fas fa-chevron-left l-arrow arrow"></i>',
});
