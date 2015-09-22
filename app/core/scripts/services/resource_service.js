
(function () {
    'use strict';

    angular
        .module('app')
        .factory('resources', resources);

    function resources($http) {
        var service = {
            addChannel: addChannel
        };

        return service;


        /////////////////

        function addChannel(channel) {
            var endpoint = 'localhost:3000/addchannel';
            $http.push(endpoint, channel).then(function () {

            });
        }
    }

}());

