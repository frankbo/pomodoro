(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var router = express.Router();
    var bodyParser = require('body-parser');
    var server = app.listen(3000, function () {
        console.log('listening on *:3000');
    });
    var io = require('socket.io').listen(server);
    var Timer = require('./timer.js');
    var idCounter = 0;
    var timerList = [];

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        if (req.method === 'OPTIONS') {
            return res.send(200);
        }
        next();
    });
    app.use(express.static(__dirname + '/../app'));
    app.use('/bower_components', express.static(__dirname + '/../bower_components'));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.use('/', router);

    router.get('/', function (req, res) {
        res.sendFile('index.html', { root: __dirname + '/../app/' });
    });

    router.get('/gettimers', function (req, res) {
        var timerArray = [];
        timerList.forEach(function (timer) {
            var timerObject = { id: timer.id, name: timer.name };
            timerArray.push(timerObject);
        });
        res.send(timerArray);
    });


    io.on('connection', function (socket) {
        /*socket.on('timer:initialize', function (data) {
            console.log(data);
            if (!timerList[data.id]) {
                timerList[data.id] = new Timer(io, data);
            }
            timerList[data.id].currentState();
        });*/

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

        socket.on('timer:add', function (timerName) {
            var timer = { id: idCounter, name: timerName };
            idCounter += 1;
            timerList.push(new Timer(io, timer));
            io.emit('timer:added', timer);
        });
    });


    module.exports = app;
}());
