$(document).ready(function() {
	
	// $("#phone").mask('+7 (999) 999-99-99', {placeholder:'_'});

	$('.btn-video').click(function(event) {
		player.playVideo();
	});

	$('.remodal-close').click(function(event) {
		player.stopVideo();
	});

	
});