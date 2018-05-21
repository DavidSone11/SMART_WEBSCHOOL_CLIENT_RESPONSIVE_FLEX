
var app = angular.module("sbAdminApp");
app.directive("fileModel", ['$parse', '$compile', function ($parse, $compile) {

    return {
        restrict: 'A',
        compile: function (tElem, tAttrs) {
            console.log(name + ': compile');
            return {
                pre: function (scope, elem, attrs) {
                    // console.log(name + ': pre link');
                    // elem.bind('change', function(){
                    //     console.log("inside pre link");
                    // });
                },
                post: function (scope, elem, attrs) {
                    console.log(name + ': post link');
                    elem.bind('change', function () {
                        $parse(attrs.fileModel).assign(scope, elem[0].files)
                        scope.$apply();

                    });
                }
            }
        },
        controller: function ($scope, $http) {
            $scope.upload = function () {
                
                var fd = new FormData();
                console.log($scope.files);
                angular.forEach($scope.files, function (file) {
                    fd.append('file', file);
                });

                console.log("DASdas"+fd);

                
            }

        }
    }


}]);