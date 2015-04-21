(function () {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    function TimerController($timeout) {
        var vm = this;
        var t;

        // 25 minutes
        vm.timeRemaining = 25 * 1000 * 60;
        vm.avtiveButton = true;

        vm.startTimer = startTimer;
        vm.pauseTimer = pauseTimer;


        function startTimer() {
            console.log('testLog');
            vm.avtiveButton = false;
            countdown();
        }

        function countdown() {
            t = $timeout(function () {
                vm.timeRemaining = vm.timeRemaining - 1000;
                // As long as timeRemaining is bigger than 0
                if (vm.timeRemaining) {
                    startTimer();
                }
            }, 1000);
        }

        function pauseTimer() {
            if (t) {
                vm.avtiveButton = true;
                $timeout.cancel(t);
            }
        }

    }

}());
