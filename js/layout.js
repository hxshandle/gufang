var VH = $(window).height(),
offset = 159;
function initLayout(minHeight) {
	var vh = VH < minHeight ? minHeight: VH;
	var _h = vh - offset;
	$('.main').css({
		height: _h + 'px'
	});
	$('.main .left,.main .right').css({
		height: _h + 'px'
	});
	$('.cont').css({
		paddingTop: (_h - 360) / 2 + 'px'
	});
}

// init sub-menu for pages
$(function() {
	var _sel = ".top-menu .has-sub-menu";
	$(_sel).hover(
	function() {
		var $this = $(this);
		$this.find('.sub-menu').stop().slideDown();
	},
	function() {
		var $this = $(this);
		$this.find('.sub-menu').stop().slideUp(100);
	});

});

