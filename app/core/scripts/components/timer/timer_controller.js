(function () {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    function TimerController($stateParams, socket) {
        var vm = this;
        //var remaining = WORK;
        var currentTime = new Date().getTime();
        var remaining = currentTime + 5 * 1000;

        vm.remaining = remainingTime(remaining);
        vm.activeButton = true;

        vm.startTimer = startTimer;
        vm.pauseTimer = pauseTimer;


        function startTimer() {
            var data = {
                id: $stateParams.id,
                remaining: remaining
            };
            socket.emit('timer:start', data);
        }

        function pauseTimer() {
            var data = {
                id: $stateParams.id
            };
            socket.emit('timer:stop', data);
        }

        function remainingTime(time) {
            return time - new Date().getTime();
        }

        socket.on('timer:buttonChange', function (change) {
            vm.activeButton = change;
        });

        socket.on('timer:remaining', function (msg) {
            vm.remaining = remainingTime(msg);
        });

    }
}());
