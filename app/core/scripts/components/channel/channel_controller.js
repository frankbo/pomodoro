(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChannelController', ChannelController);

    function ChannelController() {
        var vm = this;

        vm.channelList = [
            { id: 1, name: 'Frontend' },
            { id: 2, name: 'Backend' },
            { id: 3, name: 'Design' }
        ];
    }
}());
