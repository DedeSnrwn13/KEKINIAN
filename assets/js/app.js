
// load images

	const myimg2 = document.getElementById("myimg2");
	const myimg3 = document.getElementById("myimg3");
	const myimg4 = document.getElementById("myimg4");
	const myimg5 = document.getElementById("myimg5");
	const myimg6 = document.getElementById("myimg6");
	const myimg7 = document.getElementById("myimg7");
	const myimg8 = document.getElementById("myimg8");
	const myimg9 = document.getElementById("myimg9");
	const myimg10 = document.getElementById("myimg10");
	const myimg11 = document.getElementById("myimg11");
	const myimg12 = document.getElementById("myimg12");


	myimg2.addEventListener("load", function() {});
	myimg3.addEventListener("load", function() {});
	myimg4.addEventListener("load", function() {});
	myimg5.addEventListener("load", function() {});
	myimg6.addEventListener("load", function() {});
	myimg7.addEventListener("load", function() {});
	myimg8.addEventListener("load", function() {});
	myimg9.addEventListener("load", function() {});
	myimg10.addEventListener("load", function() {});
	myimg11.addEventListener("load", function() {});
	myimg12.addEventListener("load", function() {});

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