(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddChannelController', AddChannelController);

    function AddChannelController(store) {
        var vm = this;
        vm.channelName = '';
        vm.channelList = store.getChannelList();

        vm.addChannel = function () {
            if (!vm.channelName) { return; }

            vm.channelList.push({
                id: vm.channelList.length + 1,
                name: vm.channelName
            });
        };
    }
}());
