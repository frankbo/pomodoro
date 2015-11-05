
(function () {
    'use strict';

    angular
        .module('app')
        .factory('resource', resource);

    function resource($http, socket, store) {
        var service = {
            addChannel: addChannel,
            getChannels: getChannels
        };

        return service;


        /////////////////

        function addChannel(channel) {
            socket.emit('timer:add', channel);
        }

        function getChannels() {
            var url = 'http://localhost:3000/gettimers';
            return $http.get(url).then(function (response) {
                console.log(response.data);
                store.setChannelList(response.data);
                return response.data;
            });
        }

    }

}());

