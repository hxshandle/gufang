$(function() {
	$('.logo').bind('load', function() {
		var $this = $(this);
		$this.css({
			display: 'block',
			opacity: 0,
			left: '35px',
			top: '30%' 
		});
		TweenLite.fromTo(this, 5, {
			opacity: 0
		},
		{
			opacity: 0.99
		});
	});
  $('.logo').attr('src',$('.logo').attr('src'));
});

