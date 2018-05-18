
var app = angular.module("sbAdminApp").directive("login", ['$compile', function ($compile) {


    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/login/login.tmpl.html',
        link: function (scope, elem, attr) {

        },
        controller: function ($scope) {

        }

    }
}]);