//nice scroll

$(function() {

		$('body').niceScroll({

			cursorcolor: '#f7600e',
			cursorwidth: '10px',
			cursorborder: 'none'
		});


		//change header height

		$('.header').height($(window).height());

		//scroll to features

		$('.header .arrow').click(function() {
				$('html, body').animate({

					scrollTop: $('.features').offset().top

				}, 1000);

		});

		//show hidden items

		$('.show-more').click(function() {

			$('.ourwork .hidden').fadeIn(2000);

		});

		//check testy
		
		$(".owl-carousel").owlCarousel({
			rtl:true,
			nav:true,
			items:1,
			loop:true,
			mouseDrag:false,
			smartSpeed:1000,

			//autoplay:true,
			//autoplaytimeout:2000,
		});
		

	});



