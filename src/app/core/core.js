(function (angular) { 'use strict';

    /**
     * Core
     */
    angular.module('sirya.core', [
        'sirya.core.auth',
        'sirya.core.endpoints',
        'sirya.core.models',
    ]);
})(window.angular);
