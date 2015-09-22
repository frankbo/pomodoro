
(function () {
    'use strict';

    angular
        .module('app')
        .factory('resource', resource);

    function resource($http, store) {
        var service = {
            addChannel: addChannel
        };

        return service;


        /////////////////

        function addChannel(channel) {
            var endpoint = 'localhost:3000/addchannel';
            var channelList = store.getChannelList();
            $http.push(endpoint, channel).then(function (response) {
                channelList.push(response.data);
                return response.data;
            });
        }
    }

}());

