$(function(){
	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$("#top").on("click","a", function (event) {
       
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	
});



$(function(){
	$(".categories__tab").click(function() {
	$(".categories__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".categories__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});


$(function(){

//start search placeholder replace
if ($(window).width() < 991 ) {
    $("option[value='1']").show();;
}
else { $("option[value='1']").remove();}
//end search placeholder replace

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
		breakpoint: 480,
		settings: {
			slidesToShow: 1
		}
	}
]
});



$('.product-slider').slick({
slidesToShow: 1,
prevArrow: $('.prev-arrow'),
nextArrow: $('.next-arrow'),
dots: true
});
//end slider init

//start mobile menu
$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').slideToggle()
});
//end mobile menu

$('.load-more-button--table').click(function(){
	$('.retailers__row').addClass('active');
});


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

$('.filter-item img').click(function(){	
	$(this).parent().hide();
});

$('.filter-mobile').click(function(){
	$('.search').toggleClass('active');
	$("option[value='1']").remove();
	$(".filter__search-input").attr("placeholder","Search by keyword...");
	
	$(".no-selected-filters").slideToggle();
});

$('.search-close').click(function(){
	
	$(".no-selected-filters").hide();
	$('.search').removeClass('active');
	$(".filter__search-input").attr("placeholder","Enter keyword...")
	
});



$('.load-more-button--mobile').click(function(){
	
	$(".search-product .col").slideDown();
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


if ($(window).width() < 991 ) {
$('.header__menu li').click(function(){
	$(".header__menu").fadeOut();
	$(".menu-btn").removeClass('active');
});
}
//start search placeholder replace
if ($(window).width() < 991 ) {
    $(".filter__search-input").attr("placeholder","Enter keyword...");
}
else { $(".filter__search-input']").attr("placeholder","Search by keyword...");}
//end search placeholder replace

$("#top").on("click","a", function (event) {
       
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });








