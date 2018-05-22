
var app = angular.module("sbAdminApp");
app.directive("leftSidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/left-sidebar/left-sidebar.tmpl.html',

        controller: function ($scope, Fullscreen, $state) {

            $scope.isToggle = false;
            

           

            $scope.logout = function () {
                $state.go("login");
            }




        }

    }
}]);