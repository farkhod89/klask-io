(function() {
    'use strict';

    angular
        .module('researchApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            'filters',
            'ngSanitize',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }


})();




angular.module('filters', [])
    .filter('formatKoMoGo', function () {
        return function (size) {
            if (isNaN(size))
                size = 0;
            if (size < 1024)
                return size + ' o';
            size /= 1024;
            if (size < 1024)
                return size.toFixed(2) + ' Kio';
            size /= 1024;
            if (size < 1024)
                return size.toFixed(2) + ' Mio';
            size /= 1024;
            if (size < 1024)
                return size.toFixed(2) + ' Gio';
            size /= 1024;
            return size.toFixed(2) + ' Tio';
        };
    })
    .filter('unsafe',['$sce', function ($sce) {
        return function (content) {
            return $sce.trustAsHtml(content);
        };
    }])
    .filter('countDocs', function () {
        return function (tableauClefValeur) {
            if (tableauClefValeur === undefined)
                return 0;
            var count=0;
            angular.forEach(tableauClefValeur, function(key, value) {
                if (key.hasOwnProperty('docNumber')) {
                    count = count + key['docNumber'];
                }
            });
            return count.toLocaleString("fr");
        };
    });
