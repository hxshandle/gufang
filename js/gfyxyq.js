$(function() {
	$('.txt').on('load', function() {
		TweenLite.fromTo(this, 5, {
			opacity: 0
		},
		{
			opacity: 0.99
		});
	});
	$('.txt').attr('src', $('.txt').attr('src'));
});

