(function () {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    function TimerController($timeout, WORK, BREAK, socket) {
        var vm = this;
        var t;
        //var remaining = WORK;
        var remaining = 5 * 1000;

        vm.remaining = remaining;
        vm.activeButton = true;

        vm.startTimer = startTimer;
        vm.pauseTimer = pauseTimer;


        function startTimer() {
            countdown();
        }

        function countdown() {
            t = $timeout(function () {
                // As long as remaining is bigger than 0. 0 == false is true
                if (vm.remaining) {
                    socket.emit('timer:buttonChange', false);
                    remaining = remaining - 1000;
                    socket.emit('timer:remaining', remaining);
                    startTimer();
                } else {
                    socket.emit('timer:buttonChange', true);
                    remaining = BREAK;
                    socket.emit('timer:remaining', remaining);
                }
            }, 1000);
        }

        function pauseTimer() {
            if (t) {
                socket.emit('timer:buttonChange', true);
                $timeout.cancel(t);
            }
        }

        socket.on('timer:buttonChange', function (change) {
            vm.activeButton = change;
        });

        socket.on('timer:remaining', function (msg) {
            vm.remaining = msg;
        });

    }
}());
