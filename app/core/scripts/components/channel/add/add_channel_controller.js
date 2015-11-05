(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddChannelController', AddChannelController);

    function AddChannelController(store, resource) {
        var vm = this;
        vm.channelName = '';
        vm.channelList = store.getChannelList();

        vm.addChannel = function () {
            if (!vm.channelName) { return; }

            resource.addChannel(vm.channelName);
        };
    }
}());
