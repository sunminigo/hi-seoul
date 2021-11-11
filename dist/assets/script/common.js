$(function () {
	var naviHei = $('.navigation').outerHeight();

	$('.navi_hidden_box').css({'height': naviHei});

	sideMenu();
	slider();
	tabBox();
	dropdown();
});

sideMenu = function () {
	$('.btn_menu').click(function () {
		$('.side_menu').addClass('active');
	});
	$('.side_menu .btn_close').click(function () {
		$('.side_menu').removeClass('active');
	});
};

slider = function () {
	var winWid = $(window).innerWidth();
	var winHei = $(window).innerHeight();
	var slideCnt = 2.1;


	if (winWid == 375 && winHei == 812 || winWid == 280 && winHei == 653) {
		slideCnt = 1.1;
	}
	
	tabBox = function () {
		$('.tab_menu > ul > li').eq(0).addClass('active');
		$('.tab_content > div').hide().eq(0).show();

		$('.tab_menu > ul > li').click(function () {
			let target = $(this);
			let index = target.index();

			$('.tab_menu > ul > li').removeClass('active');
			target.addClass('active');
			$('.tab_content > div').css('display', 'none');
			$('.tab_content > div').eq(index).css('display', 'flex');
		});
	};

	$('#visual_slider')
		.slick({
			autoplay: true,
  		autoplaySpeed: 3000,
			lazyLoad: 'ondemand',
			dots: true,
			draggable: true,
			arrows: false,
			slidesToShow: slideCnt,
			infinite: false,
		})
		.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			if (currentSlide !== nextSlide) {
				$('.slick-center + .slick-cloned').each(function (index, node) {
					var $node = $(node);

					setTimeout(function () {
						$node.addClass('slick-current');
						$node.addClass('slick-center');
					});
				});
			}
		});

		$('#label_slider').slick({
			autoplay: true,
  		autoplaySpeed: 2000,
			dots: false,
			arrows: false,
			infinite: true,
		});
};

dropdown = function () {
	$('.depth1 h2').click(function () {
		var depth2 = $(this).parents('.depth1 li').children('.depth2');

		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			depth2.addClass('active');
			$(this).find('.btn_dropdown').attr('class', 'ph-caret-up-thin btn_dropdown');
		} else {
			depth2.removeClass('active');
			$(this).find('.btn_dropdown').attr('class', 'ph-caret-down-thin  btn_dropdown');
		}
	});
};
