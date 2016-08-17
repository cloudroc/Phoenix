(function($) {
	$.ready(function() {
		$('body').on('click', 'a', function(e) {
			e.preventDefault();
		});
	});
	window.pt = {};
})(mui);