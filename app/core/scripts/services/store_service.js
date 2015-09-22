
(function () {
    'use strict';

    angular
        .module('app')
        .factory('store', store);

    function store() {
        var channelList = [
            { id: 1, name: 'Example' }
        ];

        var service = {
            getChannelList: getChannelList
        };

        return service;


        /////////////////

        function getChannelList() {
            return channelList;
        }
    }

}());
