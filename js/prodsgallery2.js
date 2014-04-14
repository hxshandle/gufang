$(function() {
  var polts = $('.polt');
  polts.css({opacity:0});

	function doLayout() {
		var winW = $(window).width();
		winW = winW < 1024 ? 1024: winW;
    winW = winW - 310;
		var poltW = 256;
		var colNum = Math.floor(winW / poltW);
		var spare = winW - poltW * colNum;
		var offSet = Math.floor(spare / 2);
    $('.left').css({width:winW+'px'});
		$('.polt').each(function(idx) {
			if (idx % colNum == 0) {
				$(this).css({
					'margin-left': offSet + 'px'
				});
			} else {
				$(this).css({
					'margin-left': '0px'
				});
			}
		});
	}
	doLayout();
  $('.polt a').filter('.show-img').colorbox({rel:".polt a"});
  var tl = new TimelineLite();
  polts.each(function(){
    tl.add(TweenLite.to(this, 0.5, {opacity:1}));
  });
  tl.pause();
  tl.resume();
	$(window).resize(doLayout);
});

