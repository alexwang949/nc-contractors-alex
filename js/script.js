console.log('hello');

// setInterval(function() {
// 	changeColor();
// }, 3000);

window.onload = function() {

	var $body = $('body');

	$body.on('click', function() {
		console.log('clicked');
	})
}
