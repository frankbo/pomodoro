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
            var newChannel;
            if (!vm.channelName) { return; }

            newChannel = {
                id: vm.channelList.length + 1,
                name: vm.channelName
            };

            resource.addChannel(newChannel);
            // TODO See if vm is automagically updated after receiving the answer from the endpoint
        };
    }
}());
