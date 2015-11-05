
(function () {
    'use strict';

    angular
        .module('app')
        .factory('store', store);

    function store() {
        var channelList = [];

        var service = {
            getChannelList: getChannelList,
            setChannelList: setChannelList
        };

        return service;


        /////////////////

        function getChannelList() {
            return channelList;
        }

        function setChannelList(newChanelList) {
            channelList = newChanelList;
        }
    }

}());
