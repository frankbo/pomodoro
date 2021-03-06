(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChannelController', ChannelController);

    function ChannelController(socket, $modal, store) {
        var vm = this;
        vm.channelList = store.getChannelList();

        vm.removeChannel = function (index) {
            vm.channelList.splice(index, 1);
        };

        vm.openModal = function () {
            $modal({
                template: './core/scripts/components/channel/add/add_channel_modal.html',
                show: true
            });
        };


        socket.on('timer:added', function (timer) {
            vm.channelList.push(timer);
        });
    }
}());
