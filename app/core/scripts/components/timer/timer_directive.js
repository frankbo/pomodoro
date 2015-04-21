(function () {
    'use strict';

    angular
        .module('app')
        .directive('poTimer', poTimer);

    function poTimer() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: './core/scripts/components/timer/timer_directive.html',
            scope: {

            },
            controller: 'TimerController',
            controllerAs: 'vm',
            bindToController: true,
            link: link
        };
        return directive;

        function link(scope, elem, attr) {

        }
    }
}());
