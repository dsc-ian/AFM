
$(function() {
    console.log( "ready!" );
    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
    var _navSubHeight = '';
	$('#home').addClass('intel-active');

	if(_viewport.width <= 768) {
		$('body').addClass('mobile');
		changeImageMobile();
		$('.navigation').css({height:_viewport.height + 'px'});
		
	} else {
		
		$('body').removeClass('mobile');
	}

	if(_viewport.width <= 1200) {
		_navSubHeight = '150px';
	} else {
		_navSubHeight = '192px';
	}
	imageHero();
	initPageAnim();

	onLoadAnimation();
    /*
    $('.hero-container, .hero-overlay, .about, .vehicle-type, .more-intel').css({
    	height : _viewport.height + 'px'
    });*/

	$('.btn-close').click(function(e){
		e.preventDefault();
		$('#home').removeClass('intel-active');
		$(window).scrollTop( 0 );
		console.log('test');
	});

	var navContainer = $('.main-nav');
	var navItem = navContainer.children('li');
	navItem.each(function(){
		var _item = $(this), tweenItem;
		_item.on('click', function(){
			var _this = $(this);
			console.log(_this);
			_this.siblings().removeClass('active');
			_this.addClass('active');
		});

		TweenMax.set('.sub-item', {
					opacity:0, 
					y: -30
				});

		_item.on('mouseenter', function(){
			var _this = $(this);
			if(_this.hasClass('has-sub')) {
				//_this.children('ul').addClass('active');
				TweenMax.to('.sub-nav', 0.5, {height:_navSubHeight, opacity:1, ease:Expo.easeOut});		
				tweenItem = TweenMax.staggerTo('.sub-item', 0.5, {
					opacity:1, 
					y:0,
					ease:Expo.easeOut,
					delay:0.5
				},0.1);
			}

		});

		_item.on('mouseleave', function(){
			var _this = $(this);
			TweenMax.to('.sub-nav', 0.5, {height:'0', opacity:0, ease:Expo.easeOut});		
			tweenItem = TweenMax.staggerTo('.sub-item', 0.5, {
					opacity:0, 
					y: -30,
					ease:Expo.easeIn,

				},0.1);
			//_this.children('ul').removeClass('active');
		});



	});

	$('.hamburger').click(function(){
		var _this = $(this), tweenLogo, tweenBurger, tweenHeader, tweenPatty;

		var patties = ['.patty-1', '.patty-2', '.patty-3'];



		if(_this.hasClass('active')){
			//_this.removeClass('active');
			
		tweenHeader = TweenMax.to('.navigation', 1, {y:0, display:'none', ease: Expo.easeIn});
		tweenPatty = TweenMax.to('.patty-1', 1, {
			opacity:1, 
			y:-100, 
			rotation:-45, 
			ease:Expo.easeIn,
			onComplete: (function(){
				TweenMax.to('.patty-1', 0.1, {rotation:0});
			})
		});
		tweenPatty = TweenMax.to('.patty-3', 1, {opacity:1, 
			y:-100, 
			rotation:45, 
			ease:Expo.easeIn, 
			onComplete: (function(){
				TweenMax.to('.patty-3', 0.1, {rotation:0});
				_this.removeClass('active');
				$('.header').removeClass('nav-active');
			})
		});
			
		tweenBurger = TweenMax.staggerTo(patties.reverse(), 0.5, { 
			opacity:1, 
			y:0, 
			ease:Expo.easeOut,
			delay: 1.5
		}, 0.1);

		tweenLogo = TweenMax.to('.logo', 1, {y:'0%', ease:Expo.easeOut, delay:1.5});

		} else {

		
		tweenLogo = TweenMax.to('.logo', 0.8, {y:'-100%', ease:Expo.easeIn});
			tweenBurger = TweenMax.staggerTo(patties, 0.5, {
				opacity:0, 
				y:-100, 
				ease:Expo.easeIn,
				onComplete: (function(){
					tweenPatty = TweenMax.to('.patty-1', 1, {opacity:1, y:0, rotation:-45, ease:Expo.easeOut, delay:0.7});
					tweenPatty = TweenMax.to('.patty-3', 1, {opacity:1, y:0, rotation:45, ease:Expo.easeOut, delay:0.7});

					_this.addClass('active');
				$('.header').addClass('nav-active');
				})
			}, 0.1);

		tweenHeader = TweenMax.to('.navigation', 1, {y:138, display:'block', ease:Expo.easeOut, delay:1});
		
		}
	});
	
	
	$('#countdown1').timeTo({
	    timeTo: new Date(new Date('Mon Aug 31 2015 09:00:00 GMT+0800 (PHT)')),
	    displayDays: 2,
	    displayCaptions: true,
	    fontSize: 65,
	    captionSize: 10
	}); 


	$('#countdown2').timeTo({
	    timeTo: new Date(new Date('Mon Aug 31 2015 09:00:00 GMT+0800 (PHT)')),
	    displayDays: 2,
	    displayCaptions: true,
	    fontSize: 65,
	    captionSize: 10
	}); 

	if($('body').hasClass('mobile')) {
		$('#countdown3').timeTo({
		    timeTo: new Date(new Date('Mon Aug 31 2015 09:00:00 GMT+0800 (PHT)')),
		    displayDays: 2,
		    displayCaptions: true,
		    fontSize: 65,
		    captionSize: 10
		}); 
	}


});

$(window).resize(function(){   
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
	console.log(_viewport.width);
	if(_viewport.width <= 768) {
		$('body').addClass('mobile');
		changeImageMobile();
		$('.navigation').css({height:_viewport.height + 'px'});
		
	} else {
		
		$('body').removeClass('mobile');
	}
});


$(window).scroll(function() {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
    var height = $(window).scrollTop();
    console.log(height);

    if($('#home').hasClass('intel-active')) {
	   
    	if(_viewport.width > 320) {
		    if(height > 90 ) {
		        // do something
		        $('#home').removeClass('intel-active');
		        $( this).scrollTop( 0 );
		    }
		} else {
		    if(height > 40 ) {
			       // do something
		        $('#home').removeClass('intel-active');
		        $( this).scrollTop( 0 );
		    }
		}
    

    }


});

function changeImageMobile() {
	var _vehicleImage = $('.vehicle-item');
	_vehicleImage.each(function(){
		var _this = $(this);
		var _newImg = _this.find('img').data('mobile-image');
		_this.find('img').attr('src', 'img/'+_newImg);
	});
}

function imageHero() {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
	var wH = window.innerHeight ? window.innerHeight : $(window).height();
	var wW = window.innerWidth ? window.innerWidth : $(window).width();
	//jQuery('.hero-container').css('height',wH - 20);
	var _additionHeight = 0;
	if(_viewport.width <= 480) {
		_additionHeight = 35;
	} else {
		_additionHeight = 75;
	}
	console.log(_additionHeight);
	$('.hero-overlay, .hero-image, .hero-container').css({
		'height': wH+_additionHeight, 
		'width':wW
	});
	onLoadAnimation();
	console.log(wW);

}
/*
	var container = $(".hero-container"),
	overlay = $(".hero-overlay"),
	hero = $(".hero-image"),
	btn1 = $(".logo"),


	tn2 = new TweenMax.to(container, 1, {opacity:0, top:wH, left:wW});



	TweenMax.set(container, {width:wW, height:wH, opacity:1, top:0, left:0});
	btn1.click(function(e) {
		e.preventDefault();
		tn2.play(0);
		console.log('booom');
	});*/
	/*

    tn2 = new TweenMax.to(container, 1, {clip:'rect(0, 0, '+wH+'px, 0)', paused:true, repeat:1, yoyo:true}),
	tn1 = new TweenMax.to(container, 2, {left:0, paused:true});

	TweenMax.set(container, {
		rotation:11, 
		left:0, 
		top:0, 
		width:wW, 
		height:wH, 
		clip: 'rect(0px, '+wW+'px, '+wH+'px, 0px)'
	});
	TweenMax.set(overlay, {rotation:-11, top:0, left:0, width:wW, height:wH});
	TweenMax.set(hero, {width:wW, height:wH});
*/

//	$('.hero-container img').centerImage();



function last_child() {
  //if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {

    $('*:last-child').addClass('last-child');
  //}
}


function getRelativeDate(days, hours, minutes){
    var date = new Date((new Date()).getTime() + 60000 /* milisec */ * 60 /* minutes */ * 24 /* hours */ * days /* days */);

    date.setHours(hours || 0);
    date.setMinutes(minutes || 0);
    date.setSeconds(0);

    return date;
}

function onLoadAnimation() {

	var patties = ['.patty-1', '.patty-2', '.patty-3'];

	TweenMax.set('.logo', {y:'-100%', opacity:0});
	TweenMax.set(patties, {y:-100, opacity:0});

	TweenMax.to('.logo', 1, {y:'0%', opacity:1, ease: Ease.easeOut});
	TweenMax.staggerTo(patties.reverse(), 0.5, { 
			opacity:1, 
			y:0, 
			ease:Expo.easeOut,
			delay: 1
		}, 0.1);
}

function initPageAnim( container ) {
    /* $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if(animationDelay) {
            setTimeout(function(){
                element.addClass( animation + " visible" );
                element.removeClass('hiding');
            }, animationDelay);
        } else {
            element.addClass( animation + " visible" );
            element.removeClass('hiding');
        }

    }, {accY: -50});

*/
    // if($('html').hasClass('desktop')) {
        $('.animated').appear(function() {
            var element = $(this);
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if(animationDelay) {
                setTimeout(function(){
                    element.addClass( animation + " visible" );
                    element.removeClass('hiding');
                }, animationDelay);
            } else {
                element.addClass( animation + " visible" );
                element.removeClass('hiding');
            }


        }, {accY: -50});
    //} else {
        //$('.animated').removeClass('hiding');
    
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