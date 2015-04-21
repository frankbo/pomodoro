(function () {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    function TimerController($timeout, WORK, BREAK) {
        var vm = this;
        var t;

        // 25 * seconds * minutes
        vm.timeRemaining = WORK;
        //vm.timeRemaining = 5 * 1000;
        vm.activeButton = true;

        vm.startTimer = startTimer;
        vm.pauseTimer = pauseTimer;


        function startTimer() {
            console.log('testLog');
            vm.activeButton = false;
            countdown();
        }

        function countdown() {
            t = $timeout(function () {
                // As long as timeRemaining is bigger than 0
                if (vm.timeRemaining) {
                    vm.timeRemaining = vm.timeRemaining - 1000;
                    startTimer();
                } else {
                    vm.timeRemaining = BREAK;
                    vm.activeButton = true;
                }
            }, 1000);
        }

        function pauseTimer() {
            if (t) {
                vm.activeButton = true;
                $timeout.cancel(t);
            }
        }

    }

}());
