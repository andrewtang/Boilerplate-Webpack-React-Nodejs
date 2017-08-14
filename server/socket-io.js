var userList = [];

module.exports = function(server) {

	var io = require('socket.io')(server);

	/**
	 * Handle the socket.io connections
	 */
	io.on('connection', function(socket) {
		console.log('io.on \'connection\'');
	});

};
