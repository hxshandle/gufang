$(function() {
	var polts = $('.polt');
	var winW = $(window).width();
	var originalWH = [polts.eq(0).width(), polts.eq(0).height()];
	var gutter = 1;
	var cols = 4;
	var spare = winW - cols * originalWH[0] - (cols - 1) * gutter;

	var targetW = Math.floor((winW - (cols - 1) * gutter) / cols);
	var mod = (winW - (cols - 1) * gutter) % cols;
	console.log("mod is :" + mod);
	var targetH = Math.floor(targetW * originalWH[1] / originalWH[0]);
	console.log(targetW + "," + targetH);
	polts.each(function(idx) {
		if (idx % cols != 0) {
			$(this).css({
				"margin-left": gutter + "px"
			});
		}
		$(this).css({
			width: targetW + "px",
			height: targetH + "px"
		})
	});
});

