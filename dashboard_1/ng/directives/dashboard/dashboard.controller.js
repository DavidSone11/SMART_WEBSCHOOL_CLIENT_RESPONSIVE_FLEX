"use strict";
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $parse, $timeout, $compile, $interpolate) {

    $scope.loading = true;
    $scope.a = 10;
    $scope.b = 10;
    let arr = [11, 22, 33, 44, 45, 44, 66];
    let mySet = new Set(arr);
    console.log(mySet);

    console.log($interpolate("The Result is : {{a+b}}")($scope));
    console.log($parse("a+b")($scope));

    console.log("Hello World".substring(4, 1));
    var pi = "Hello World!";
    var str = pi.replace(/^\s+|\s+$/gm, '');
    console.log(str);





    setTimeout(function () {
        $scope.message = 'Dashboard';
        console.log('message:' + $scope.message);
        $scope.$apply(); //this triggers a $digest
        $scope.loading = false;
        // angular.element(document.querySelector('[id="page-wrapper"]')).addClass('overlay-main-page-wrapper');
    }, 2000);

    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);


});