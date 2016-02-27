(function (angular) { 'use strict';

    /**
     * sirya application.
     */
    angular.module('sirya', [
        'ui.router',
        'sirya.ui',
        'sirya.core',
        'ui.materialize'
    ]).run(function( $rootScope, $state, $stateParams ){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
})
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise(function($injector, $location) {
            var url = $location.url();
            var redirectUrl = "";
            if (url.match("/app")) {
                if (url.match("/app/home/searches")) {
                    redirectUrl = "app.home.searches";
                }
            } else if (url.match("/authentication")) {
                redirectUrl = "authentication.login";
            } else if (url.match("/")) {
                redirectUrl = "app.home.searches";
            }else if (url.match("/app/home")) {
                redirectUrl = "app.home.searches";
            }

            if (redirectUrl === "")
                redirectUrl = "app.home.searches";

            console.log("redirect to : " + redirectUrl);
            $injector.invoke(function($state) {
                $state.go(redirectUrl);
            });
        });

        $stateProvider
        .state('authentication', {
            abstract: true,
            url: "/authentication",
            templateUrl: "app/ui/authentication/authentication.html"
        })
        .state('authentication.login', {
            url: "/login",
            views: {
                '@authentication': {
                    controller: 'LoginCtrl',
                    controllerAs: 'login',
                    templateUrl: "app/ui/authentication/login/login.html"
                }
            }
        })
        .state('app', {
            abstract: true,
            url: "/app",
            controller: 'AppCtrl',
            controllerAs: 'mainCtrl',
            templateUrl: 'app/ui/app/app.html'
        })
        .state('app.home', {
            url: "/home",
            views: {
                '@app': {
                    controller: 'HomeCtrl',
                    controllerAs: 'home',
                    templateUrl: 'app/ui/app/home/home.html'
                }

            }
        }).state('app.home.searches', {
            url: "/searches",
            views: {
                '@app': {
                    controller: 'SearchesCtrl',
                    controllerAs: 'searches',
                    templateUrl: 'app/ui/app/searches/searches.html'
                }

            }
        }).state('app.home.contacts', {
            url: "/contacts",
            views: {
                '@app': {
                    controller: 'ContactsCtrl',
                    controllerAs: 'contacts',
                    templateUrl: 'app/ui/app/contacts/contacts.html'
                }

            }
        }).state('app.home.profile', {
            url: "/profile",
            views: {
                '@app': {
                    controller: 'ProfileCtrl',
                    controllerAs: 'profile',
                    templateUrl: 'app/ui/app/profile/profile.html'
                }

            }
        }).state('app.home.chat', {
            url: "/chat",
            views: {
                '@app': {
                    controller: 'ChatCtrl',
                    controllerAs: 'chat',
                    templateUrl: 'app/ui/app/chat/chat.html'
                }

            }
        })

    });
})(window.angular);
