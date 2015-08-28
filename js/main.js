
$(function() {
	setTimeout(function(){

		$(window).scrollTop(0);
	},1);
    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

    var _navSubHeight = '';
    $('body').addClass('scroll-lock');
    setTimeout(function(){
		$('.wrapper').addClass('intel-active');
    $('body').removeClass('scroll-lock');
    }, 2000);
    setTimeout(function(){
		$('.wrapper').addClass('header-animate');
    }, 3000);


	if(_viewport.width <= 768) {
		$('body').addClass('mobile');	
	} else {
		$('body').removeClass('mobile');
	}

	if(_viewport.width <= 1200) {
		_navSubHeight = '150px';
	} else {
		_navSubHeight = '192px';
	}
	if(!$('body').hasClass('mobile')) {

		$.stellar({
		    horizontalScrolling: false,
		    responsive: true
		});
	}

	imageHero();
	initPageAnim();
	changeImageMobile();
	onLoadAnimation();

	$('.vehicle-row-item').each(function(){
		var _this = $(this);
		_this.find('.modal-btn').click(function(e){
			e.preventDefault();
			_this.find('.modal').modal('toggle');
		});
	});

	$('.btn-close').click(function(e){
		e.preventDefault();
		$('.wrapper').removeClass('intel-active');
		$('.wrapper').addClass('animate-header');
		setTimeout(function(){
			$('.wrapper').removeClass('animate-header');
		},500);
		//$(window).scrollTop( 0 );
		console.log('test');
		return false;
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

		TweenMax.set('.sub-item', {opacity:0, y: -30 });

		_item.on('mouseenter', function(){
			var _this = $(this);
			if(_this.hasClass('has-sub')) {
				_this.children('ul').addClass('active');
				$('.header').addClass('sub-menu-active');
				/*setTimeout(function(){
					_this.children('ul').removeClass('animating');
				},500);*/

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
/*
				setTimeout(function(){
					_this.children('ul').removeClass('active');
				},500);*/
			TweenMax.to('.sub-nav', 0.5, {height:'0', opacity:0, ease:Expo.easeOut});		
			tweenItem = TweenMax.staggerTo('.sub-item', 0.5, {
					opacity:0, 
					y: -30,
					ease:Expo.easeIn,
				},0.1);
				_this.children('ul').removeClass('active');
			setTimeout(function(){
				$('.header').removeClass('sub-menu-active');
			},1000);
		});




	});

	$('.hamburger').click(function(e){

		e.preventDefault();
		
		var _this = $(this), tweenLogo, tweenBurger, tweenHeader, tweenPatty;





		var patties = ['.patty-1', '.patty-2', '.patty-3'];
		//if(!$('.wrapper').hasClass('viewport-header')) {

			$('.wrapper').addClass('animating');
			setTimeout(function(){
				$('.wrapper').removeClass('animating');
			},1000);
		//}
		if(_this.hasClass('active')){

			

			if(_viewport.width <= 1200 && _viewport.width > 768) {
			
					$('body').removeClass('scroll-lock');
		
			}
			
			$('.wrapper').removeClass('active-header active-nav');
			setTimeout(function(){
				_this.removeClass('active');
			}, 800);
		
				scrollLock(false);
			if(!$('.wrapper').hasClass('viewport-header')) {
				$('.mobile-logo').removeClass('logo-hide');
			} 

			setTimeout(function(){
				$('.wrapper').removeClass('back-animating');
			},1200);

			if($('body').hasClass('mobile')) {
				$('.header').css({'height':'100%'});
			}

		} else {
			$('.wrapper').addClass('active-header active-nav');
			setTimeout(function(){
				_this.addClass('active');
			}, 800);

			setTimeout(function(){
				$('.wrapper').addClass('back-animating');
			},800);

			if($('.wrapper').hasClass('viewport-header')) {
				$('.mobile-logo').addClass('logo-hide');
			} 

				scrollLock(true);

				if(_viewport.width <= 1200 && _viewport.width > 768) {
					setTimeout(function(){
						$('body').addClass('scroll-lock');
					},1000);
				}
			if($('body').hasClass('mobile')) {
				$('.header').css({'height':_viewport.height});
			}
				
		}

		//return false;



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

return false;
});

$(window).resize(function(){   
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
	console.log(_viewport.width);
	changeImageMobile();

	imageHero();
	if(_viewport.width <= 768) {
		$('body').addClass('mobile');
		//$('.navigation').css({'min-height':_viewport.height + 'px'});
		
	} else {
		
		$('body').removeClass('mobile');
	}

	if($('body').hasClass('mobile')) {
		$('#countdown3').timeTo({
		    timeTo: new Date(new Date('Mon Aug 31 2015 09:00:00 GMT+0800 (PHT)')),
		    displayDays: 2,
		    displayCaptions: true,
		    fontSize: 65,
		    captionSize: 10
		}); 
	} else {
		//$('.navigation').css({'min-height':_viewport.height + 'px'});
	}

});


$(window).scroll(function(e) {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}
    var height = $(window).scrollTop();
    var heroHeight = $('.hero-overlay2').scrollTop();

	parallax();

	if($('.wrapper').attr('id') != 'vehicle-overview') {

	    if(_viewport.width >= 1200) {

	    		if( height > _viewport.height +100) {


	    			$('.wrapper').addClass('animating active-header');

	    			if(!$('.hamburger').hasClass('active')){


		    			setTimeout(function(){
							$('.wrapper').removeClass('animating');
						},1000);

		    				
	    			}

	    		} else {


	    			$('.wrapper').removeClass('active-header');

	    			if($('.wrapper').hasClass('active-nav')) {
		    			if( height > 960) {
		    				if($('.hamburger').hasClass('active')){
						
				    			//$('.wrapper').addClass('animating');

				    			/*setTimeout(function(){
									$('.wrapper').removeClass('animating');
								},1000);*/

					
									$('.hamburger').fadeOut();
									//$('.hamburger').removeClass('active');
							
							}

			    		} else {

								$('.hamburger').fadeIn('slow');
								//$('.hamburger').addClass('active');
			    		}
		    		}
	    			
	    		}

	    
	    	
	    }

	    console.log(height);
	    //if($('#home').hasClass('intel-active')) 


		   
	    	if(_viewport.width > 600) {
			    /*if(height == 102 ) {
			  		TweenMax.to(window, 1, {scrollTo:{y:100}, ease:Ease.easeOut});
	   	 	    } 
				*/

	    		if( height > _viewport.height + 100) {
	    			if(!$('.nav-cont').hasClass('active')){

						$('.wrapper').addClass('animating viewport-header');

		    			setTimeout(function(){
							$('.wrapper').removeClass('animating');
						},400);

		    			setTimeout(function(){
							$('.wrapper').addClass('done-animating');
						},200);



		    			setTimeout(function(){
							$('.wrapper').addClass('back-animating');
						},1000);

						$('.nav-cont').addClass('active');
						setTimeout(function(){

							$('.header').addClass('nav-cont-active');
						},2000);
					} else {


					}


			    } else {
			    	//setTimeout(function(){

			    	$('.wrapper').removeClass('done-animating viewport-header');
			    	$('.nav-cont').removeClass('active');
					$('.header').removeClass('nav-cont-active');
			   // },1000);
		    		setTimeout(function(){
						$('.wrapper').removeClass('back-animating animating');
					},800);
			    }


			    if(height > 100 ) {
			    	$('.wrapper').addClass('scrolling')
	   	 			$('.wrapper').addClass('intel-hide');

	   	 			//$('.hero-image').addClass('scroll-y');
			    } else {
	   	 			$('.wrapper').removeClass('intel-hide');
	   	 			//$('.hero-image').removeClass('scroll-y');
			    }

			    
			
			} else {
			    
			    if(height > 59 ) {
			    	$('.wrapper').addClass('scrolling')
	   	 			$('.wrapper').addClass('intel-hide');
	   	 			//$('.hero-image').addClass('scroll-y');
			    } else {
	   	 			$('.wrapper').removeClass('intel-hide');
	   	 			//$('.hero-image').removeClass('scroll-y');
			    }

	/*
			    if( height > _viewport.height) {
	    			if(!$('.nav-cont').hasClass('active')){

						$('.wrapper').addClass('animating viewport-header');

		    			setTimeout(function(){
							$('.wrapper').removeClass('animating');
						},400);

		    			setTimeout(function(){
							$('.wrapper').addClass('done-animating');
						},200);

						$('.nav-cont').addClass('active');
					} else {

						//$('.nav-cont').removeClass('active');
						//$('.wrapper').removeClass('done-animating');
					}


			    }*/


			    if( height > _viewport.height) {
	    			if(!$('.nav-cont').hasClass('active')){

						$('.wrapper').addClass('animating viewport-header');

		    			setTimeout(function(){
							$('.wrapper').removeClass('animating');
						},400);

		    			setTimeout(function(){
							$('.wrapper').addClass('done-animating');
						},200);



		    			setTimeout(function(){
							$('.wrapper').addClass('back-animating');
						},1000);

						$('.nav-cont').addClass('active');
					} else {

						//$('.nav-cont').removeClass('active');
						//$('.wrapper').removeClass('done-animating');
					}


			    } else {
			    	//setTimeout(function(){

			    	$('.wrapper').removeClass('done-animating viewport-header');
			    	$('.nav-cont').removeClass('active');
			   // },1000);
		    		setTimeout(function(){
						$('.wrapper').removeClass('back-animating animating');
					},800);
			    }


		



			    
			}
	    	

	    //}

	} else { //if vehicle overview page

		if(_viewport.width > 600) {

			if(height > 100 ) {
		    	$('.wrapper').addClass('scrolling')
		 		$('.wrapper').addClass('intel-hide');
		 			//$('.hero-image').addClass('scroll-y');
		    } else {
		 		$('.wrapper').removeClass('intel-hide');
		 			//$('.hero-image').removeClass('scroll-y');
		    }

		} else {
			if(height > 54 ) {
		    	$('.wrapper').addClass('scrolling')
		 		$('.wrapper').addClass('intel-hide');
		 			//$('.hero-image').addClass('scroll-y');
		    } else {
		 		$('.wrapper').removeClass('intel-hide');
		 			//$('.hero-image').removeClass('scroll-y');
		    }
		}

	}







});


function navigationMenu(selector) {
	var _this = $(selector), tweenLogo, tweenBurger, tweenHeader, tweenPatty;

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
				scrollLock(false);

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
				scrollLock(true);
		}
}

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
	//onLoadAnimation();
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

function onLoadAnimation() {
/*
	var patties = ['.patty-1', '.patty-2', '.patty-3'];

	TweenMax.set('.logo', {y:'-100%', opacity:0});
	TweenMax.set(patties, {y:-100, opacity:0});

	TweenMax.to('.logo', 1, {y:'0%', opacity:1, ease: Ease.easeOut});
	TweenMax.staggerTo(patties.reverse(), 0.5, { 
			opacity:1, 
			y:0, 
			ease:Expo.easeOut,
			delay: 1
		}, 0.1);*/
}

function initPageAnim( container ) {
   
   	if(!$('body').hasClass('mobile')) {
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
	if ($('.wrapper').hasClass('intel-hide') && !$('body').hasClass('mobile')) {
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
