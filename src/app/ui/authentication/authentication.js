(function (angular) { 'use strict';

    /**
    * sirya authentication module
    */
    angular.module('sirya.ui.authentication', [
        'sirya.ui.authentication.login',
        'sirya.ui.authentication.logout',
        'sirya.ui.authentication.signup',
    ]);
})(window.angular);
