(function () {
    'use strict';

    angular
        .module('app')
        .directive('poTimer', poTimer);

    function poTimer() {
        var directive = {
            restrict: 'E',
            replace: false,
            templateUrl: './core/scripts/components/timer/timer.html',
            scope: {},
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
