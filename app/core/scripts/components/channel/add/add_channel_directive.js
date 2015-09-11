(function() {
    'use strict';

    angular
        .module('app')
        .directive('poAddChannel', poAddChannel);

    function poAddChannel() {
        var directive = {
            restrict: 'E',
            replace: false,
            templateUrl: './core/scripts/components/channel/add/add_channel.html',
            scope: {},
            controller: 'AddChannelController',
            controllerAs: 'vm',
            bindToController: true,
            link: link
        };
        return directive;

        function link(scope, elem, attr) {

        }
    }
})();

