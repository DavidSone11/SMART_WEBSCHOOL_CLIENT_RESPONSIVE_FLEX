
var app = angular.module("sbAdminApp");
app.directive("mainFooter", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/footer/footer.tmpl.html',

        controller: function ($scope, $state) {


            

        }

    }
}]);