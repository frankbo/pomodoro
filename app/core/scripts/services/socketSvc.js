(function() {
    angular.module('app').service('socketSvc', ["$rootScope", function($rootScope) {
        var _socket = io();

        var _on = function(eventName, data) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(_socket, args);
                });
            });
        };

        var _emit = function(eventName, data, callback) {
            _socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(_socket, args);
                    }
                });
            })
        };

        return {
            on: _on,
            emit: _emit
        }

    }]);
})();
