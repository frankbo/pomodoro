'use strict';
angular
    .module('app')
    .directive('poOnEnter', poOnEnter);

function poOnEnter() {
    var directive = {
        restrict: 'A',
        link: link
    };
    return directive;

    function link(scope, elem, attrs) {
        elem.bind('keydown keypress', function (event) {
            var enterButton = 13;
            if (event.which === enterButton) {
                scope.$apply(function () {
                    scope.$eval(attrs.poOnEnter);
                });

                event.preventDefault();
            }
        });
    }
}
