(function() {
    'use strict';

    angular
        .module('app')
        .directive('poChannel', poChannel);

    function poChannel() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: './core/scripts/components/channel/channel_directive.html',
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

