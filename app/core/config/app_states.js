(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            // Redirect to root url if state is unknown
            $urlRouterProvider.otherwise('/');

            // States
            $stateProvider
                .state('channel', {
                    url: '/',
                    resolve: {
                        fetch: function (resource) {
                            return resource.getChannels();
                        }
                    },
                    template: '<po-channel></po-channel>'
                })
                .state('channel.timer', {
                    url: 'channel/{id:int}',
                    template: '<po-timer></po-timer>'
                });
        });
}());
