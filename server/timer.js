(function () {
    'use strict';

    var Timer = function (io) {
        this.io = io;
        this.channelList = {};
    };

    Timer.prototype.countdown = function (channelData) {
        var self = this;
        var channel;

        if (!self.channelList[channelData.id]) {
            self.channelList[channelData.id] = createChannel(channelData);
        }

        channel = self.channelList[channelData.id];

        console.log('channel id', channelData.id);
        console.log('channel remaining', channelData.remaining);

        self.remainingTime = channel.remaining;
        channel.timer = setInterval(function () {
            var currentTime = new Date().getTime();
            if (self.remainingTime > currentTime) {
                self.io.emit('timer:buttonChange', false);
                self.io.emit('timer:remaining', self.remainingTime);
            } else {
                self.io.emit('timer:buttonChange', true);
                self.remainingTime = currentTime + 5 * 1000;
                self.io.emit('timer:remaining', self.remainingTime);
            }
        }, 1000);
    };

    Timer.prototype.pause = function (channelData) {
        var channelTimer = this.channelList[channelData.id].timer;
        if (channelTimer) {
            this.io.emit('timer:buttonChange', true);
            clearInterval(channelTimer);
        }
    };


    function createChannel(channelData) {
        var newChannel = {
            id: channelData.id,
            remaining: channelData.remaining,
            timer: null
        };
        return newChannel;
    }

    module.exports = Timer;
}());
