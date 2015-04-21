(function() {
    angular.module('app').service('timeSvc', [ "$timeout", "socketSvc", function($timeout, socketSvc) {

        var _startTimer = function() {

            if(remainingTime !== 0){
                remainingTime = remainingTime - 1000;
                socketSvc.emit("timeSvc:timeRemaining", remainingTime);
                timer = $timeout(_startTimer(), 1000);
            } else if(breakRemaining !== 0){
                breakRemaining =  breakRemaining - 1000;
                socketSvc.emit("timeSvc:breakRemaining", breakRemaining);
                timer = $timeout(_startTimer(), 1000);
            } else {
                breakRemaining = _breakTime;
                remainingTime = _workTime;
                _startTimer()
            }
        };

        var _pauseTimer = function() {
            if(timer){
                $timeout.cancel(timer);
            }
        };

        return {
            init: _init,
            startTimer: _startTimer,
            pauseTimer: _pauseTimer
        }
    }]);
})();
