(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChannelController', ChannelController);

    function ChannelController() {
        var vm = this;

        vm.channelList = ['Channel 1', 'Channel 2', 'Channel 3'];
    }
}());
