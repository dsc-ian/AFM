
$(function() {

    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

	/*setTimeout(function(){	
		$(window).scrollTop(0);
	},1);*/

  	//$('body').addClass('scroll-lock');
    
    var _navSubHeight = '';


    
    setTimeout(function(){
		$('.wrapper').addClass('intel-active');
		$(window).scrollTop(0);
    }, 4000);

   /* setTimeout(function(){
		$('body').removeClass('scroll-lock');
    }, 4000);
*/
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

	/*if(!$('body').hasClass('mobile')) {
		$.stellar({
		    horizontalScrolling: false,
		    responsive: true
		});
	}*/

    mobileClass(_viewport.width);
	imageHero();
	initPageAnim();
	changeImageMobile();


	//VEHICLE PAGE
	$('.vehicle-row-item').each(function(){
		var _this = $(this);

		_this.find('.modal-btn').click(function(e){
			var __this = $(this);
			e.preventDefault();
			//console.log(__this.parent().siblings('.modal'));
			__this.parent().siblings('.modal').modal('toggle');
			//console.log(_this.find('.modal'));
		});
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
				

				if(_viewport.width <= 1200) {
					setTimeout(function(){
						$('body').addClass('scroll-lock');
					},1000);

				}

				
				
		}	




	});
/*
	var navContainer = $('.main-nav');
	var navItem = navContainer.children('li');
	navItem.each(function(){
		var _item = $(this), tweenItem;

		_item.children('a').on('mouseenter', function(){
		
			if(_item.hasClass('has-sub')) {
				_item.children('ul').addClass('active');
			}

		});

		_item.children('a').on('mouseleave', function(){
			
			if(_item.hasClass('has-sub')) {
				_item.children('ul').removeClass('active');
			}
		});




	});
	
*/
	
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

});

$(window).resize(function(){   
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
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
	if(_viewport.width <= 1200) {
			$('.header').addClass('main-header-active');
			
				
	} else {

		$('.header').removeClass('main-header-active');
	}

});


$(window).scroll(function(e) {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
    var height = $(window).scrollTop();
    //var heroHeight = $('.hero-overlay2').scrollTop();
	//var y = $(window).scrollTop();
	console.log(height);

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

			if(height >= $('.hero-overlay').height()) {
				$('.header').addClass('scrolling');
			} else {
				$('.header').removeClass('scrolling');
			}





			/*if(!$('.header').hasClass('navigation-active')) {

				if(height >= $('.hero-overlay').height()) {
					$('.header').addClass('navigation-active');

				} else {
					$('.header').removeClass('navigation-active');
				}

			} else {
				if(height >= $('.hero-overlay').height()) {
					$('.header').addClass('scrolling');
				} else {
					$('.header').removeClass('scrolling');
				}
			}*/


		} else { // screen smaller than 1200

			if($('.wrapper').hasClass('intel-active')) {

				if(height >= $('.get-intel').height()) {
					$('.wrapper').addClass('intel-hide');
				} else {
					$('.wrapper').removeClass('intel-hide');
				}


			}


				if(height >= $('.hero-overlay').height()) {
					$('.header').addClass('main-header-active');
				} else {
					$('.header').removeClass('main-header-active');
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
		} else {

				if($('.wrapper').hasClass('intel-active')) {

					if(height >= $('.get-intel').height()) {
						$('.wrapper').addClass('intel-hide');
					} else {
						$('.wrapper').removeClass('intel-hide');
					}

				}
				if(height >= $('.hero-overlay').height()) {
					$('.header').addClass('main-header-active');
				} else {
					$('.header').removeClass('main-header-active');
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
	console.log(_additionHeight);
	$('.hero-overlay, .hero-image, .hero-container, .hero-overlay2').css({
		'height': wH+_additionHeight
	});

	$('.auction-timer').css({bottom: 100+100 + 'px'});
	console.log(wW);

}

function last_child() {
  //if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
    $('*:last-child').addClass('last-child');
  //}
}

function scrollLock(active) {
	console.log(active);

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
            console.log(element);
            if(element.hasClass('counter-cont')) {
            	element.addClass('active');
            	console.log('test');
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
		console.log(newH);
	}
}

function mobileClass(viewport) {	

	if(viewport <= 768) {
		$('body').addClass('mobile');	
	} else {
		$('body').removeClass('mobile');
	}
	
}