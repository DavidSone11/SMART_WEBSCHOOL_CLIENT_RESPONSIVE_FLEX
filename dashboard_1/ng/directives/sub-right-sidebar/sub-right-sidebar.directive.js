
var app = angular.module("sbAdminApp");
app.directive("subRightSidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/sub-right-sidebar/sub-right-sidebar.tmpl.html',

        controller: function ($scope) {

            $scope.isToggle = false;

            $scope.tab = 1;
            $scope.isPage = true;

            $scope.isSetPage = function(){
                return $scope.isPage = !$scope.isPage;
            }

            $scope.setTab = function (newTab) {
                $scope.isSetPage();
                $scope.tab = newTab;
            };

            $scope.isSet = function (tabNum) {
                return $scope.tab === tabNum;
            };


            $scope.rightToggler = function () {
                $(function () {
                    if ($scope.isToggle) {

                        $('#rightSidebar').animate({ width: "0px" }, "slow");
                        $('#rightSidebar').animate({ width: "0px" }, "slow");
                        $('#rightoggleBtn').animate({ left: "-60px" }, "slow");

                    } else {
                        $('#rightSidebar').animate({ width: "83%" }, "slow");
                    }
                });

                $scope.isToggle = !$scope.isToggle;
            }


        }

    }
}]);