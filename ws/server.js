
var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http);


app.get('/', function (req, res) { 
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

	io.emit('chat message', socket.id + ' has joined.');

	socket.on('chat message', function(msg) { 
		io.emit('chat message', msg);
	});
});


http.listen(3000, () => { console.log('listening on 3000'); });
