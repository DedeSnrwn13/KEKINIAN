
// load images


//

// sticky navbar

var height = $('.social-media').height();

$(window).scroll(function () {
	if($(this).scrollTop() > height) {
		$('.navbar').addClass('fixed');
	} else {
		$('.navbar').removeClass('fixed')
	}
});

//

// dropdown bendera

$(".popup-trigger").hover(function(){
	$(".popup-content").toggleClass('popup-active');
});

//