(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var server = app.listen(3000, function () {
        console.log('listening on *:3000');
    });
    var io = require('socket.io').listen(server);
    var Timer = require('./timer.js');

    var timerList = {};


    app.use(express.static(__dirname + '/../app'));
    app.use('/bower_components', express.static(__dirname + '/../bower_components'));

    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: __dirname + '/../app/' });
    });

    io.on('connection', function (socket) {
        socket.on('timer:initialize', function (data) {
            if (!timerList[data.id]) {
                timerList[data.id] = new Timer(io, data);
            }
            timerList[data.id].currentState();
        });

        socket.on('timer:start', function (data) {
            if (!timerList[data.id]) {
                timerList[data.id] = new Timer(io, data);
            }
            timerList[data.id].countdown();

        });

        socket.on('timer:stop', function (data) {
            if (!timerList[data.id]) {
                timerList[data.id] = new Timer(io, data);
            }
            timerList[data.id].pause();
        });
    });

    module.exports = app;
}());
