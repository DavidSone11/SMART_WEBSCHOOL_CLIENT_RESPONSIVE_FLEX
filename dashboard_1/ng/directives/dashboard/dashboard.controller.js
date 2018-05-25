
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $compile,$timeout) {


    setTimeout(function() {
        $scope.message = 'Dashboard';
        console.log('message:' + $scope.message);
        $scope.$apply(); //this triggers a $digest
        
      }, 2000);

      $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);


});