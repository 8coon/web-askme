

$('#ac-ask-text').keydown(function() {
	var left = $('#ac-ask-text').attr('maxlength') - $(this).val().length;
	if (left < 0) {
		left = 0;
	}

	$('#ac-ask-text-counter').text(left + ' characters left.');
});


$('#ac-ask-submit').click(function() {
	$('.ac-error').show();
});


$('#ac-login').click(function() {
	$('.ac-error').show();
});


$('#ac-ask').click(function() {
	window.location.href = 'ask.html';
})

