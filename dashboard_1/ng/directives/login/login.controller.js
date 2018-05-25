
var app = angular.module("sbAdminApp");
app.controller("LoginController", function ($scope, $state, $window) {

    $scope.isRegister = false;
    $scope.isForget =false;

    $scope.login = function (username, password) {


        setTimeout(function() {
            $state.go("home.dashboard");
          }, 2000);

       

    }

});