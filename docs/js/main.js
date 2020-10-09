$(function(){

//start slider init
$('.slider').slick({
slidesToShow: 5,
prevArrow: $('.prev'),
nextArrow: $('.next'),
responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 3
		}
	},
	{
		breakpoint: 763,
		settings: {
			slidesToShow: 1
		}
	}
]
});
//end slider init

//start mobile menu
$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').slideToggle()
});
//end mobile menu

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});

//-------end sticky header--------

//start load-more
$('.load-more-button').click(function(){
	
	$(".popular-product .hide-row").slideDown();
});
//end load-more


});