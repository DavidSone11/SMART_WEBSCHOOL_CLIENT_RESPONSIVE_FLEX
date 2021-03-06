
var app = angular.module("sbAdminApp");
app.controller('UploadController', ['$scope', '$timeout', '$http', 'Upload', function ($scope, $timeout, $http, Upload) {
    $scope.files = [];
    $scope.isLoading = false;
    $scope.user = {
        data: ''
    }

    $scope.getUserUploads = function (query, timeout) {
        return $http.get('http://localhost:4000/api/v1/userUpload/findByfilename?name=' + query);
    }


    $scope.SelectedImage = function (selected) {
        if (selected) {
            $scope.user.data = selected.originalObject.img.data["data"];
            $scope.contentType = selected.originalObject.img.contentType;
            $scope.base64String = _arrayBufferToBase64(selected.originalObject.img.data["data"]);

        } else {
            $scope.base64String = null;
        }
    };

    function _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    $scope.mainColor = 1;

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


}]);