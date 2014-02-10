/**
 * Created by handle on 2/8/14.
 */
(function($) {
	var vh = $(window).height(),
	vw = $(window).width();

	//center the main logo
	var LOGO_WIDTH = 626,
	LOGO_HEIGHT = 130;
	var baseX = ((vw - LOGO_WIDTH) / 2),
	baseY = ((vh - LOGO_HEIGHT) / 2);

	$('.main-logo').css({
		'left': baseX + 'px',
		'top': baseY + 'px',
		'opacity': 0.1
	});

	$('#commune').css({
    'left':(baseX+370)+'px',
    'top':(baseY)+'px'
	});
	$('#homme').css({
    'left':(baseX+320)+'px',
    'top':(baseY+70)+'px'
	});
	$('#gufang').css({
    'left':(baseX+50)+'px',
    'top':(baseY+20)+'px'
	});
	$('#xinjie').css({
    'left':(baseX-90)+'px',
    'top':(baseY+80)+'px'
	});

	$('#start').click(function() {
		TweenMax.to('.main-logo', 3, {
			opacity: 1,
			ease: Power1.easeInOut
		});
		TweenMax.to('.sub', 3, {
			opacity: 0,
			ease: Power1.easeInOut
		});
	});

  $('#reset').click(function(){
    location.reload(false);
  });

})(jQuery);

