$( document ).ready(function() {
	$('.select').click(function() {
		$('.selected').removeClass('selected');
		$(this).toggleClass('selected');

	});
});