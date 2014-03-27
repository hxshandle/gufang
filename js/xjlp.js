$(function() {
	$('.logo').bind('load', function() {
		var $this = $(this);
		$this.css({
			display: 'block',
			opacity: 0
		}).center({
			against: 'parent'
		});
    TweenLite.fromTo(this, 5, {opacity: 0}, {opacity: 1});
	});
});

