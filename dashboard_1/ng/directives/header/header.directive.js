
"use strict";
var app = angular.module("sbAdminApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state, $window) {
            $scope.isToggle = false;
            $scope.toggleSideBar = function () {
                $(function () {
                    if (!$scope.isToggle) {
                        $('#left-sidebar').animate({ width: "70px" });
                        $('#left-sidebar').addClass("no-side");
                        
                        $('#main-content-wrapper').animate({ 'margin-left': "70px" });
                        $('.main-header').animate({ margin: "0 71px" });
                        // $('.sidebar-footer').hide(500);
                        $('.profile_info').hide(500);
                        $('#profile_pic_id').removeClass("profile_info");
                        $('#profile_pic_id').addClass("no-header-wrapper");
                        $('.main-header .header-right-content').animate({ 'padding': "0px 0 0 152px" });



                    } else {
                        $('#main-content-wrapper').animate({ 'margin-left': "231px" });
                        $('#left-sidebar').animate({ 'width': "230px" });
                        $('.main-header').animate({ 'margin': "0 230px" });

                        // $('.sidebar-footer').show(500);
                        $('.profile_info').show(500);
                        $('#profile_pic_id').removeClass("no-header-wrapper");
                        $('.main-header .header-right-content').animate({ 'padding': "0px 0 0 0px" });
                    }
                    $scope.isToggle = !$scope.isToggle;
                });
                
            }

            $scope.isSubToggle = true;
            $scope.toggleRightSubSideBar = function () {
                $(function () {
                    if ($scope.isSubToggle) {
                        $('.sub-r-sidebar').show(500);
                    } else {
                        $('.sub-r-sidebar').hide(500);
                    }
                    $scope.isSubToggle = !$scope.isSubToggle;
                });

            }


            $scope.logout = function () {





            }



        }

    }
}]);