
var app = angular.module("sbAdminApp");
app.directive("userUpload", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/UserUpload/UserUpload.tmpl.html',
        link: function (scope, elem, attr) {

        },
        controller: function ($scope) {

        }

    }
}]);