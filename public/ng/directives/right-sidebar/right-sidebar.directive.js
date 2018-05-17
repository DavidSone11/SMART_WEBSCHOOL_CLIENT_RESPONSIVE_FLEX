
var app = angular.module("sbAdminApp");
app.directive("rightSidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/right-sidebar/right-sidebar.tmpl.html',

        controller: function ($scope) {


        

        }

    }
}]);