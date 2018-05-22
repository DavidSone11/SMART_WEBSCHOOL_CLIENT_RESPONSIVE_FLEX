'use strict';

var app = angular.module("sbAdminApp");
app.factory("uploadFactory", ['$resource', '$state', '$window', '$cookies', '$location', '$http', '$q', function ($resource, $state, $window, $cookies, $location, $http, $q) {


    var uploadOBJ = {
        getAllUserUploads: function (limit, page, order) {
            var apiUrl = "http://localhost:4000/api/v1/userFileUpload/getAllUserUpload";
            return $resource(apiUrl, null, {
                'query': {
                    method: 'GET',
                    url: apiUrl,
                    isArray: false,
                    headers: {
                        'Accept': 'application/json; q=1.0, */*; q=0.1',
                        'Content-Type': 'application/json'
                    },
                    params: { limit: limit, page: page, order: order }
                }
            });
        }
    }

    return uploadOBJ;


}]);