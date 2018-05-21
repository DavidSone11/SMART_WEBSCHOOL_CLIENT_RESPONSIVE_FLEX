
var app = angular.module("sbAdminApp");
app.directive("fileModel", ['$parse', '$compile', function ($parse, $compile) {

    return {
        restrict: 'A',
        compile: function (tElem, tAttrs) {
            console.log(name + ': compile');
            return {
                pre: function (scope, iElem, iAttrs) {
                    console.log(name + ': pre link');
                    iElem.bind('change', function(){
                        console.log("inside pre link");
                    });
                },
                post: function (scope, iElem, iAttrs) {
                    console.log(name + ': post link');
                    iElem.bind('change', function(){
                        console.log("inside post link");
                    });
                }
            }
        },
        controller: function ($scope, $http) {
            $scope.upload = function () {
                console.log("DASdas");
            }

        }
    }


}]);