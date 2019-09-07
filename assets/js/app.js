var height = $('.social-media').height();

$(window).scroll(function () {
	if($(this).scrollTop() > height) {
		$('.navbar').addClass('fixed');
	} else {
		$('.navbar').removeClass('fixed');
	}
});


$(".popup-trigger").hover(function(){
	$(".popup-content").toggleClass('popup-active');
});