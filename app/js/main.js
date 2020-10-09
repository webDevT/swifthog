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

$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});


$('.sign-in, .sign-in-mobile').click(function(){
	
	$(".popup-sign-in").fadeIn();
	$(".popup-sign-in").addClass('active');
});

$('.button--register, .login-mobile, .sign-up__btn').click(function(){
	
	$(".popup-register").fadeIn();
	$(".popup-register").addClass('active');
});

$('.sign-up__btn').click(function(){
	
	$(".popup-register").fadeIn();
	$(".popup-register").addClass('active');
	$(".popup-sign-in").fadeOut();
	$(".popup-sign-in").removeClass('active');
});

$('.sign-in__btn').click(function(){
	
	$(".popup-register").fadeOut();
	$(".popup-register").removeClass('active');
	$(".popup-sign-in").fadeIn();
	$(".popup-sign-in").addClass('active');
});

$('.close').click(function(){
	
	$(".popup").fadeOut();
	$(".popup").removeClass('active');
});

});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var searchWrapper = $(".popup-content"); 
     var searchRow = $(".popup"); 
    if (!searchWrapper.is(e.target) 
        && searchWrapper.has(e.target).length === 0) { 
      searchRow.removeClass('active'); 
  	searchRow.fadeOut(); 
    }
  });
});






$('.header__menu li').click(function(){
	$(".header__menu").fadeOut();
	$(".menu-btn").removeClass('active');
});



