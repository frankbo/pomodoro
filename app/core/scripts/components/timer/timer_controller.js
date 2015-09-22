(function () {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    function TimerController($stateParams, socket) {
        var vm = this;
        var timerId = $stateParams.id;

        vm.startTimer = startTimer;
        vm.pauseTimer = pauseTimer;

        initialize();


        function initialize() {
            var data = {
                id: timerId
            };
            socket.emit('timer:initialize', data);
        }


        function startTimer() {
            var data = {
                id: timerId
            };
            socket.emit('timer:start', data);
        }


        function pauseTimer() {
            var data = {
                id: timerId
            };
            socket.emit('timer:stop', data);
        }


        socket.on('timer' + timerId + ':buttonChange', function (change) {
            vm.activeButton = change;
        });


        socket.on('timer' + timerId + ':countdown', function (timeRemaining) {
            vm.remaining = timeRemaining;
        });

    }
}());
