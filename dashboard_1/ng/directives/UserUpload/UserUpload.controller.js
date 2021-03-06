
var app = angular.module("sbAdminApp");
app.controller('UserUploadController', ['$scope', '$timeout', '$http', 'Upload', 'userUploadFactory', 'uploadFactory', function ($scope, $timeout, $http, Upload, userUploadFactory, uploadFactory) {


    $scope.userUploadLists = [];
    $scope.uploadUser = function (file) {
        file.upload = Upload.upload({
            url: 'http://localhost:4000/api/v1/userUpload/saveUpload',
            data: { username: 'santosh', file: file },
        });

        file.upload.then(function (response) {
            $timeout(function () {
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });

    }





    $scope.getallUserUpload = function () {
      
        uploadFactory.getAllUserUploads("10","1","fileName").query().$promise.then(function (response) {
            $scope.userUploadLists = response.results;

        }, function (errResponse) {
        });
    }

    $scope.getallUserUpload();




}]);