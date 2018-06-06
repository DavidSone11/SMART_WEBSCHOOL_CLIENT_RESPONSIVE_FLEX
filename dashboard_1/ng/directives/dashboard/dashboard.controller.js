"use strict";
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $parse, $timeout, $compile, $interpolate) {

    $scope.loading = true;
    $scope.a = 10;
    $scope.b = 10;
    let arr = [11, 22, 33, 44, 45, 44, 66];
    let mySet = new Set(arr);
    console.log(mySet);

    $scope.userlists= [];
    $scope.userlists.push(
        { 
            
            "roleCode" : "Planner", 
            "markDelete" : false, 
            "userName" : "admin", 
            "firstName" : "adminR", 
            "lastName" : "adminR", 
            "password" : "admin", 
            "email" : "admin", 
            "createdTime" : "2018-05-12T12:31:41.016+0000", 
           
        },
        { 
            
            "roleCode" : "Planner", 
            "markDelete" : false, 
            "userName" : "admin", 
            "firstName" : "adminR", 
            "lastName" : "adminR", 
            "password" : "admin123456", 
            "email" : "admin", 
            "createdTime" : "2018-05-12T12:32:07.110+0000", 
           
        },
        { 
            
            "roleCode" : "Planner", 
            "markDelete" : false, 
            "userName" : "admin", 
            "firstName" : "adminR", 
            "lastName" : "adminR", 
            "password" : "admin123456", 
            "email" : "admin", 
            "createdTime" : "2018-05-12T12:32:07.775+0000", 
           
        },
        { 
            
            "roleCode" : "Planner", 
            "markDelete" : false, 
            "userName" : "admin", 
            "firstName" : "adminR", 
            "lastName" : "adminR", 
            "password" : "admin123456", 
            "email" : "admin", 
            "createdTime" : "2018-05-12T12:32:08.355+0000", 
           
        },
        { 
            
            "roleCode" : "Planner", 
            "markDelete" : false, 
            "userName" : "admin", 
            "firstName" : "adminR", 
            "lastName" : "adminR", 
            "password" : "admin123456", 
            "email" : "admin", 
            "createdTime" : "2018-05-12T12:32:08.884+0000", 
           
        },
        { 
        
            "roleCode" : "Planner", 
            "markDelete" : false, 
            "userName" : "admin", 
            "firstName" : "adminR", 
            "lastName" : "adminR", 
            "password" : "admin123456", 
            "email" : "admin", 
            "createdTime" : "2018-05-12T12:32:09.409+0000", 
           
        });


    console.log($interpolate("The Result is : {{a+b}}")($scope));
    console.log($parse("a+b")($scope));

    //console.log("Hello World".substring(4, 1));
    //var greeting = "    Hello            World    !";
    //var str = pi.replace(/^\s+|\s+$/gm, '');
    
    function cleanStr(str) {
        // while (str.indexOf("\t") > -1) {
        //     str = str.replace("\t", " ");
        // }
        while (str.indexOf("  ") > -1) {
            str = str.replace("  ", " ");
        }
        return str;
    }
    console.log(cleanStr("    Hello            World    !"));
    //console.log(greeting);

   




    // setTimeout(function () {
    //     $scope.message = 'Dashboard';
    //     console.log('message:' + $scope.message);
    //     $scope.$apply(); //this triggers a $digest
    //     $scope.loading = false;
    //     // angular.element(document.querySelector('[id="page-wrapper"]')).addClass('overlay-main-page-wrapper');
    // }, 2000);

    // $timeout(function () {
    //     $scope.myHeader = "How are you today?";
    // }, 2000);


});