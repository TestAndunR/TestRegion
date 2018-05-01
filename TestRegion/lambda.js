let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	let email = event.email;
	console.log(email);
	
	callback(null,'Successfully executed');
}