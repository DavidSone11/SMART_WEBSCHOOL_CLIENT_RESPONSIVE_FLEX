

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
            $scope.multFiles = [];
            $scope.upload = function () {
                var formdata = new FormData();
                console.log($scope.files);
                angular.forEach($scope.files, function (file) {
                    formdata.append('file', file);
                    $scope.multFiles.push(file);
                });


                $http({
                    method: 'POST',
                    url: 'http://localhost:4000/api/v1/userFileUpload/saveUserFileUpload',
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined },
                    data: formdata

                }).then(function success(response) {

                    console.log(response);

                }, function error(response) {
                    console.log(response);

                });
            },
                $scope.remove = function (files) {

                    console.log(files);

                    $scope.fileSize = new formatSizeUnits(
                        files[0].size,
                        function callBackBefore(res) {
                            console.log(res);
                        }, function callBackAfter(res) {
                            console.log(res);
                        }, function callBackAfterError(res) {
                            console.log(res);
                        }
                    );



                }

        }
    }


}]);