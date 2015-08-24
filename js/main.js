
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
		var _this = $(this), tweenLogo, tweenBurger, tweenHeader, tweenPatty;

		var patties = ['.bar-1', '.bar-2', '.bar-3'];


		if(_this.hasClass('active')){
			//_this.removeClass('active');
			
		tweenHeader = TweenMax.to('.navigation', 1, {y:0, ease: Expo.easeIn});
		tweenPatty = TweenMax.to('.bar-1', 1, {
			opacity:1, 
			y:-100, 
			rotation:-45, 
			ease:Expo.easeIn,
			onComplete: (function(){
				TweenMax.to('.bar-1', 0.1, {rotation:0});
			})
		});
		tweenPatty = TweenMax.to('.bar-3', 1, {opacity:1, 
			y:-100, 
			rotation:45, 
			ease:Expo.easeIn, 
			onComplete: (function(){
				TweenMax.to('.bar-3', 0.1, {rotation:0});
				_this.removeClass('active');
			})
		});
			
		tweenBurger = TweenMax.staggerTo(patties.reverse(), 0.5, { 
			opacity:1, 
			y:0, 
			ease:Expo.easeOut,
			delay: 1.5
		}, 0.1);

		tweenLogo = TweenMax.to('.logo', 1, {y:'0%', ease:Expo.easeOut, delay:1.5});


			//$('.navigation').hide();
			//$('.logo').show();
		} else {

		
		tweenLogo = TweenMax.to('.logo', 0.8, {y:'-100%', ease:Expo.easeIn});
			tweenBurger = TweenMax.staggerTo(patties, 0.5, {
				opacity:0, 
				y:-100, 
				ease:Expo.easeIn,
				onComplete: (function(){
					tweenPatty = TweenMax.to('.bar-1', 1, {opacity:1, y:0, rotation:-45, ease:Expo.easeOut, delay:0.7});
					tweenPatty = TweenMax.to('.bar-3', 1, {opacity:1, y:0, rotation:45, ease:Expo.easeOut, delay:0.7});

					_this.addClass('active');
				})
			}, 0.1);

		tweenHeader = TweenMax.to('.navigation', 1, {y:138, ease:Expo.easeOut, delay:1});
			//_this.addClass('active');

			// element, speed, easing
			


			//$('.navigation').show();
			//$('.logo').hide();
		}
	});
	
	$('.countdown').timeTo({
	    timeTo: new Date(new Date('Mon Aug 31 2015 09:00:00 GMT+0800 (PHT)')),
	    displayDays: 2,
	    displayCaptions: true,
	    fontSize: 65,
	    captionSize: 10
	}); 

});

$(window).resize(function(){

});

function imageHero() {
	var wH = window.innerHeight ? window.innerHeight : $(window).height();
	//jQuery('.hero-container').css('height',wH - 20);
	$('.hero-container, .hero-overlay, .hero-image').css('height',wH+75);
	console.log('test');

//	$('.hero-container img').centerImage();
}


function last_child() {
  //if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {

    $('*:last-child').addClass('last-child');
  //}
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