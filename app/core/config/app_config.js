(function() {
    'use strict';

    angular
        .module('app')
        .config(function($translateProvider, $translatePartialLoaderProvider) {
            $translatePartialLoaderProvider.addPart("timer");
            $translateProvider.useLoader("$translatePartialLoader", {
                urlTemplate: './local/{part}/{lang}.json'
            });
            $translateProvider.preferredLanguage('de');
    });
}());
