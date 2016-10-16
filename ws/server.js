'use strict';
const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function (req, res) { 
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('connected: ', socket.id);

    socket.on('move', function (data) {
        socket.emit('move', data);
    });


});


http.listen(3000, () => { console.log('listening on 3000'); });
