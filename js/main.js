
$(function() {

    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

	$('.overlay-brown div').width($(window).width());
    
    var _navSubHeight = '';


    
    setTimeout(function(){
		$('.wrapper').addClass('intel-active');
		$(window).scrollTop(0);
    }, 4000);

   	if($('.wrapper').hasClass('wrapper-2')) {
   		 setTimeout(function(){
	   		$('.wrapper').addClass('header-animate');
	    }, 3900);
	    setTimeout(function(){
			$('.wrapper').removeClass('header-animate');
	    }, 4500);
	}
	

	if(_viewport.width <= 1200) {
		_navSubHeight = '150px';
	} else {
		_navSubHeight = '192px';
	}

    mobileClass(_viewport.width);
	imageHero();
	initPageAnim();
	changeImageMobile();

	$(".modal-btn").fancybox({
   		'closeBtn':false
	});	


	$('.btn-close').click(function(e){
		e.preventDefault();
		$('.wrapper').removeClass('intel-active');
		
		$('.wrapper').addClass('intel-close');

		if($('.wrapper').hasClass('wrapper-2')) {

		}
	
	});

	var navContainer = $('.main-nav');
	var navItem = navContainer.children('li');
	navItem.each(function(){
		var _item = $(this), tweenItem;
		_item.on('click', function(){
			var _this = $(this);
			_this.siblings().removeClass('active');
			_this.addClass('active');
		});

	});

	$('.hamburger').click(function(e){
		e.preventDefault();
		var _this = $(this);
		if(_this.hasClass('active')){

			if(_viewport.width <= 1200) {
				$('body').removeClass('scroll-lock');
			} else {

				$('.wrapper').addClass('animate');
				setTimeout(function(){
					$('.wrapper').removeClass('animate');
				},700);
			}


				$('.header').removeClass('navigation-active');

		} else { // not active
				
				$('.header').addClass('navigation-active nav-animate');
				setTimeout(function(){
					$('.header').removeClass('nav-animate');
				},500);
				
					$('.wrapper').addClass('animate');
					setTimeout(function(){
						$('.wrapper').removeClass('animate');
					},700);

				if(_viewport.width <= 1200) {
					setTimeout(function(){
						$('body').addClass('scroll-lock');
					},1000);

				} else {
				}
		}	

	});


	$('.wrap-nav li a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      $(this).parent().addClass('active').siblings().removeClass('active');
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 201
	        }, 1000);
	        return false;
	      }
	    }
	  });
	
	
	$('.countdown').timeTo({
	    timeTo: new Date(new Date('Fri Dec 04 2015 09:00:00 GMT+0800 (PHT)')),
	    displayDays: 2,
	    displayCaptions: true,
	    fontSize: 65,
	    captionSize: 10
	}); 
	

});

$(window).resize(function(){   
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
	if(_viewport.width <= 1200) {
		if(!$('.wrapper').hasClass('resize')) {

			$('.wrapper').addClass('resize');
			setTimeout(function(){
				$('.wrapper').removeClass('resize');
			},1);
		}
	}

	changeImageMobile();
	imageHero();
	initPageAnim();
	mobileClass(_viewport.width);

	if($('body').hasClass('mobile')) {
		$('#countdown3').timeTo({
		    timeTo: new Date(new Date('Mon Aug 31 2015 09:00:00 GMT+0800 (PHT)')),
		    displayDays: 2,
		    displayCaptions: true,
		    fontSize: 65,
		    captionSize: 10
		}); 
	} else {
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
	}

		$('.hamburger').click(function(e){
		e.preventDefault();
		var _this = $(this);
		if(_this.hasClass('active')){

			if(_viewport.width <= 1200) {
				$('body').removeClass('scroll-lock');
			} else {

				$('.wrapper').addClass('animate');
				setTimeout(function(){
					$('.wrapper').removeClass('animate');
				},700);
			}


				$('.header').removeClass('navigation-active');

		} else { // not active
				
				$('.header').addClass('navigation-active nav-animate');
				setTimeout(function(){
					$('.header').removeClass('nav-animate');
				},500);
				
					$('.wrapper').addClass('animate');
					setTimeout(function(){
						$('.wrapper').removeClass('animate');
					},700);

				if(_viewport.width <= 1200) {
					setTimeout(function(){
						$('body').addClass('scroll-lock');
					},1000);

				} else {
				}
		}	

	});
	

	$('.overlay-brown div').width($(window).width());

});



$(window).scroll(function(e) {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
    var height = $(window).scrollTop();

	parallax();


	if(!$('.wrapper').hasClass('wrapper-2')) {

		if(_viewport.width > 1200) {

			if($('.wrapper').hasClass('intel-active')) {

				if(height >= $('.get-intel').height()) {
					$('.wrapper').addClass('intel-hide');
				} else {
					$('.wrapper').removeClass('intel-hide');
				}


			}

			if($('body').find('#home').length == 1) {

				if(height >= $('.hero-overlay').height()+600 - 131) {
					$('.header').addClass('scrolling');
						//$('.wrap-navigation').addClass('sticky');
				} else {
					$('.header').removeClass('scrolling');
						//$('.wrap-navigation').removeClass('sticky');
				}
			} 

			if($('body').find('#vehicle').length == 1) {
				if(height >= $('.hero-overlay').height() - 131) {
					$('.header').addClass('scrolling');
						//$('.wrap-navigation').addClass('sticky');
				} else {
					$('.header').removeClass('scrolling');
						//$('.wrap-navigation').removeClass('sticky');
				}
			}

			if(height >= 1042) {
				$('.wrap-navigation').addClass('sticky');
			} else {
				$('.wrap-navigation').removeClass('sticky');
			}


		} else { // screen smaller than 1200


			if($('.wrapper').hasClass('intel-active')) {

				if(height >= $('.get-intel').height()) {
					$('.wrapper').addClass('intel-hide');
				} else {
					$('.wrapper').removeClass('intel-hide');
				}


			}

			if(height >= $('.hero-overlay').height() + 100) {
				$('.wrap-navigation').addClass('sticky');
			} else {
				$('.wrap-navigation').removeClass('sticky');
			}

		}

	} else { // page vehicle overview

		if(_viewport.width > 1200) {

			if($('.wrapper').hasClass('intel-active')) {

				if(height >= $('.get-intel').height()) {
					$('.wrapper').addClass('intel-hide');
				} else {
					$('.wrapper').removeClass('intel-hide');
				}

			}
			if(height >= 369) {
				$('.wrap-navigation').addClass('sticky');
			} else {
				$('.wrap-navigation').removeClass('sticky');
			}
		} else {
				if($('.wrapper').hasClass('intel-active')) {

					if(height >= $('.get-intel').height()) {
						$('.wrapper').addClass('intel-hide');
					} else {
						$('.wrapper').removeClass('intel-hide');
					}

				}

			if(height >= 840) {
				$('.wrap-navigation').addClass('sticky');
			} else {
				$('.wrap-navigation').removeClass('sticky');
			}
		}
	}
	if(!$('body').hasClass('mobile') && $('#home').find('.hero-image').length != 0) {
		if($('.wrapper').hasClass('intel-active')) {
				if($(window).scrollTop() > $('.hero-image').offset().top && $(window).scrollTop() < $('.about').offset().top) {
					var currScroll = $(window).scrollTop();
					var heroOffset = $('.hero-image').offset().top;
					var maxScroll = heroOffset + 600;
					var scrollPercent = (currScroll - heroOffset) / maxScroll;

					$('.overlay-brown').css({
						width: scrollPercent <= 1 ? eval(scrollPercent * 100) + "%" : '100%'
					});
				} else if($(window).scrollTop() >= $('.about').offset().top) {
					$('.overlay-brown').css({
						width: '100%'
					})
				} else if($(window).scrollTop() <= $('.hero-image').offset().top) {
					$('.overlay-brown').css({
						width: 0
					})		
				}
			}
	}

});



function changeImageMobile() {
	var _vehicleImage = $('.vehicle-item');
	_vehicleImage.each(function(){
		var _this = $(this);
		if($('body').hasClass('mobile')) {
			var _newImg = _this.find('img').data('mobile-image');
			_this.find('img').attr('src', 'img/'+_newImg);
		} else {
			var _newImg = _this.find('img').data('desktop-image');
			_this.find('img').attr('src', 'img/'+_newImg);
		}
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
		_additionHeight = 35+50;
	} else {
		_additionHeight = 75+100;
	}
	$('.hero-overlay, .hero-image, .hero-container, .hero-overlay2').css({
		'height': wH+_additionHeight
	});

	$('.auction-timer').css({bottom: 100+100 + 'px'});


}

function last_child() {
  //if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
    $('*:last-child').addClass('last-child');
  //}
}

function scrollLock(active) {

	if($('body').hasClass('mobile')) {
		if(active) {
			$('body').addClass('scroll-lock');
		} else {
			$('body').removeClass('scroll-lock');
		}
	} else {

			$('body').removeClass('scroll-lock');
	}
}

function getRelativeDate(days, hours, minutes){
    var date = new Date((new Date()).getTime() + 60000 /* milisec */ * 60 /* minutes */ * 24 /* hours */ * days /* days */);

    date.setHours(hours || 0);
    date.setMinutes(minutes || 0);
    date.setSeconds(0);

    return date;
}

function initPageAnim( container ) {
   
   	if(!$('body').hasClass('mobile')) {

    	$('.animated').addClass('hiding');
        $('.animated').appear(function() {

            var element = $(this);
            if(element.hasClass('counter-cont')) {
            	element.addClass('active');
            	
            }
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
    } else {
    	$('.animated').removeClass('hiding');
    }
}

function parallax() {
	if (!$('body').hasClass('mobile')) {
		parallaxBackground( $('.hero-overlay'), 0.7 );
	};
}

function parallaxBackground( imgDiv, multiplier ) {

	if ( imgDiv.size() > 0 ) {
		var wH = window.innerHeight ? window.innerHeight : jQuery(window).height();
		var imgPar = imgDiv;

		//var imgParPercY = ( imgPar.offset().top + imgPar.outerHeight(false)/2 - jQuery(window).scrollTop() ) / imgPar.outerHeight(false);
		//var imgParPercY = ( imgPar.offset().top - jQuery(window).scrollTop() ) / imgPar.outerHeight(false);
		var imgParPercY = (  jQuery(window).scrollTop() );

		//console.log(imgParPercY);
		var parallaxHeight = imgPar.outerHeight(false);

		//console.log( imgParPercY, parallaxHeight );

		var newH = Math.round( (imgParPercY) * multiplier/4 );
		imgDiv.css({
			'top': ' -' + newH + 'px'
		});
	}
}

function mobileClass(viewport) {	

	if(viewport <= 768) {
		$('body').addClass('mobile');	
	} else {
		$('body').removeClass('mobile');
	}
	
}