'use strict';

var app = angular.module("sbAdminApp");
app.factory("uploadFactory", ['$resource', '$state', '$window', '$cookies', '$location', '$http', '$q', function ($resource, $state, $window, $cookies, $location, $http, $q) {


    var uploadOBJ = {
        getallUploads: function () {
            var apiUrl = "http://localhost:4000/api/v1/userFileUpload/getAllUserUpload";
            return $resource(apiUrl, null, {
                'query': { method: 'GET', url: apiUrl, isArray: false }
            });
        }
    }

    return uploadOBJ;


}]);