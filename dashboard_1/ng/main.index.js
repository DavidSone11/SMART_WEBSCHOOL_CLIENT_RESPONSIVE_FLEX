var r = (function mainFun() {
    'use strict';
    var app = angular.module('sbAdminApp', [
        'ui.router',
        'oc.lazyLoad',
        'ngAnimate',
        'angular-loading-bar',
        "ngSanitize",
        "flow",
        "angucomplete-alt",
        "FBAngular",
       "ngCookies",
        "ngResource",
        "ngRoute",
       "smart-table",
        "toggle-switch",
        "ngTouch",
        "angular-flot"

    ]);

    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');


    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        // $urlRouterProvider.otherwise('/home/dashboard');
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>',
                controller: 'LoginController',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/login/login.directive.js',
                            'ng/directives/login/login.controller.js',


                        ]
                        );
                    }]
                }

            }).state('home', {
                url: '/home',
                templateUrl: 'ng/directives/home/home.tmpl.html',
                controller: 'HomeController',
                resolve: {
                    loadExternalFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'ng/directives/home/home.directive.js',
                                'ng/directives/home/home.controller.js',
                                'ng/directives/left-sidebar/left-sidebar.directive.js',
                                'ng/directives/right-sidebar/right-sidebar.directive.js',
                                'ng/directives/sub-right-sidebar/sub-right-sidebar.directive.js',
                                'ng/directives/header/header.directive.js',
                                'ng/directives/footer/footer.directive.js',
                                





                            ]
                        });
                    }]
                }
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
                controller: 'DashboardController',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/dashboard/dashboard.controller.js',


                        ]
                        );
                    }]
                }
            }).state('home.user', {
                url: '/user',
                templateUrl: 'ng/directives/User/User.tmpl.html',
                controller: 'UserController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/User/User.controller.js',
                            'ng/directives/User/User.directive.js',

                        ]
                        );
                    }],

                }
            }).state('home.userplan', {
                url: '/plan',
                templateUrl: 'ng/directives/UserPlan/UserPlan.tmpl.html',
                controller: 'UserPlanController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/UserPlan/UserPlan.controller.js',
                            'ng/directives/UserPlan/UserPlan.directive.js',

                        ]
                        );
                    }],

                }
            }).state('home.upload', {
                url: '/upload',
                template: '<upload></upload>',
                controller: 'UploadController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/Upload/Upload.controller.js',
                            'ng/directives/Upload/Upload.directive.js',

                        ]
                        );
                    }],

                }
            })
    });
}());