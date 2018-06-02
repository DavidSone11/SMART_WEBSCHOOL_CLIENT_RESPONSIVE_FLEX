"use strict";
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $compile, $timeout) {

    $scope.loading = true;
    const a =10;
    let b = 10;
    let arr = [11,22,33,44,45,44,66];
    let mySet = new Set(arr);
    console.log(mySet);

    console.log(a+b);

    

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