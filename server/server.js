(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var server = app.listen(3000, function () {
        console.log('listening on *:3000');
    });
    var io = require('socket.io').listen(server);

    app.use(express.static(__dirname + '/../app'));
    app.use('/bower_components', express.static(__dirname + '/../bower_components'));

    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: __dirname + '/../app/' });
    });

    io.on('connection', function (socket) {
        socket.on('timer:remaining', function (remainingTime) {
            io.emit('timer:remaining', remainingTime);
        });

        socket.on('timer:buttonChange', function (buttonChange) {
            io.emit('timer:buttonChange', buttonChange);
        });
    });

    module.exports = app;
}());
