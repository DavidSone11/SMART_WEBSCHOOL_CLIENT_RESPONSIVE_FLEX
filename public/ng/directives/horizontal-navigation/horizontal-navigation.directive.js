
"use strict";
var app = angular.module("sbAdminApp");
app.directive("hrNavigation", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/horizontal-navigation/horizontal-navigation.tmpl.html',

        controller: function ($scope, $state, $window) {
           



        }

    }
}]);