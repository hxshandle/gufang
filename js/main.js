(function() {
	$('.menu').jMenu();
	// Handle menu bg change
	$('.menu a').hover(function(event) {
		var $this = $(this);
		var bgEl = $this.data('bg');
		if (bgEl) {
      $('.div-bg.active').removeClass('active');
      $(bgEl).addClass('active');
		}
	});
})();

