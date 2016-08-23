var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(servercd ..);

server.listen(3000);
app.use(express.static(__dirname));
app.get('/',function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
});

io.on('connection',function (socket) {
    socket.on('sms',function (data) {
        // io.sockets.emit('msg',data);
        socket.broadcast.emit('msg',data);
    });
});