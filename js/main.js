
$(function() {
    console.log( "ready!" );
    var _viewport = {
    	width : $(window).width(),
    	height : $(window).height()
    }

	imageHero();

    /*
    $('.hero-container, .hero-overlay, .about, .vehicle-type, .more-intel').css({
    	height : _viewport.height + 'px'
    });*/


	$('.hamburger').click(function(){
		var _this = $(this);

		if(_this.hasClass('active')){
			_this.removeClass('active');
			$('.navigation').hide();
			$('.logo').show();
		} else {
			_this.addClass('active');
			$('.navigation').show();
			$('.logo').hide();
		}
	});






});

function imageHero() {
	var wH = window.innerHeight ? window.innerHeight : $(window).height();
	//jQuery('.hero-container').css('height',wH - 20);
	$('.hero-container, .hero-overlay').css('height',wH+75);
	console.log('test');
}

/*
function imageHero() {
	var wH = window.innerHeight ? window.innerHeight : jQuery(window).height();
	jQuery('#hero-image').css('height',wH - 20);
	jQuery('.hero-image').css('height',wH);
}

function parallax() {
	if (jQuery('html').hasClass('desktop')) {
		parallaxBackground( jQuery('#hero-image .hero-image'), 0.7 );
	};
}

function parallaxBackground( imgDiv, multiplier ) {

	if ( imgDiv.size() > 0 ) {
		var wH = window.innerHeight ? window.innerHeight : jQuery(window).height();
		var imgPar = imgDiv;

		//var imgParPercY = ( imgPar.offset().top + imgPar.outerHeight(false)/2 - jQuery(window).scrollTop() ) / imgPar.outerHeight(false);
		var imgParPercY = ( imgPar.offset().top - jQuery(window).scrollTop() ) / imgPar.outerHeight(false);

		var parallaxHeight = imgPar.outerHeight(false);

		//console.log( imgParPercY, parallaxHeight );

		var newH = Math.round( (imgParPercY) * parallaxHeight * multiplier/4 );
		imgDiv.css({
			'background-position': '50% ' + newH + 'px'
		});
	}
}


jQuery(window).scroll(function() {
	parallax();

	if ( jQuery(window).scrollTop() >= jQuery('#hero-image').offset().top+jQuery('#hero-image').height() - 130) {
		if (jQuery('#navigation').hasClass('scrolling')) { 
			jQuery('#navigation').removeClass('scrolling');
			jQuery('#navigation').addClass('active-nav');
			jQuery('#navigation').addClass('active-scrolling');
			jQuery('.menu-toggle').hide();
		}
	} else {
		if (!jQuery('#navigation').hasClass('scrolling')) { 
			jQuery('#navigation').addClass('scrolling');
			jQuery('#navigation').removeClass('active-nav');
			jQuery('#navigation').removeClass('active-scrolling');
			jQuery('.menu-toggle').fadeIn();
		}
	}
*/