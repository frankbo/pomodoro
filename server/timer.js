(function () {
    'use strict';

    var oneSecond = 1000;
    var fiveMinutes = 5 * 1000;
    var twentyFiveMinutes = 2 * 1000;
    var io = require('socket.io');

    var Timer = function (server, data) {
        this.id = data.id;
        this.name = data.name;
        this.io = io.listen(server);
        this.t = null;
        this.time = twentyFiveMinutes;
        this.paused = true;
        this.isPause = false;
    };

    Timer.prototype.countdown = function () {
        var self = this;
        this.paused = false;
        self.io.emit('timer' + this.id + ':buttonChange', this.paused);

        this.t = setInterval(function () {
            if (self.time > 0) {
                self.time -= oneSecond;
            } else {
                self.time = self.toggleTime();
                self.pause();
            }
            self.io.emit('timer' + self.id + ':countdown', self.time);
        }, oneSecond);
    };


    Timer.prototype.pause = function () {
        if (this.t) {
            this.paused = true;
            this.io.emit('timer' + this.id + ':buttonChange', this.paused);
            clearInterval(this.t);
        }
    };


    Timer.prototype.currentState = function () {
        this.io.emit('timer' + this.id + ':buttonChange', this.paused);
        this.io.emit('timer' + this.id + ':countdown', this.time);
    };

    Timer.prototype.toggleTime = function () {
        this.isPause = !this.isPause;
        return this.isPause ? fiveMinutes : twentyFiveMinutes;
    };

    module.exports = Timer;
}());
