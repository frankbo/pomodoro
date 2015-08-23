(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var server = app.listen(3000, function () {
        console.log('listening on *:3000');
    });
    var io = require('socket.io').listen(server);
    var Timer = require('./timer.js');
    var timer = new Timer(io);


    app.use(express.static(__dirname + '/../app'));
    app.use('/bower_components', express.static(__dirname + '/../bower_components'));

    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: __dirname + '/../app/' });
    });

    io.on('connection', function (socket) {
        socket.on('timer:start', function (data) {
            timer.countdown(data);
        });

        socket.on('timer:stop', function (data) {
            if (timer) {
                timer.pause(data);
            }
        });
    });

    module.exports = app;
}());
