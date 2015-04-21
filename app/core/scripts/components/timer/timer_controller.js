(function () {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    function TimerController($timeout) {
        var vm = this;

        // 25 minutes
        vm.timeRemaining = 25 * 1000 * 60;
        vm.disableButton = true;

        vm.countdown = countdown;
        vm.pauseCountdown = pauseCountdown;


        function countdown() {
            console.log('testLog');
            vm.disableButton = false;
            $timeout(function () {
                vm.timeRemainsing = vm.timeRemainsing - 1000;
            }, 1000);
        }

        function pauseCountdown() {
            vm.disableButton = true;
            $timeout.cancel();
        }

    }

}());
