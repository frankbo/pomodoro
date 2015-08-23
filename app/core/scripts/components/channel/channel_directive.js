(function() {
    'use strict';

    angular
        .module('app')
        .directive('poChannel', poChannel);

    function poChannel() {
        var directive = {
            restrict: 'E',
            replace: false,
            templateUrl: './core/scripts/components/channel/channel.html',
            scope: {

            },
            controller: 'ChannelController',
            controllerAs: 'vm',
            bindToController: true,
            link: link
        };
        return directive;

        function link(scope, elem, attr) {

        }
    }
})();

