$(document).ready(function() {

	$('#btnSubmit').click(function(e) {
		e.preventDefault();
		var pwd = $('#pwd').val();

		console.log('pwd=' + pwd);
		var pwd2 = $('#pwd2').val();

	});

});
