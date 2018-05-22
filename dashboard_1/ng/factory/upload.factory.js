'use strict';

var app = angular.module("sbAdminApp");
app.factory("uploadFactory", ['$resource', '$state', '$window', '$cookies', '$location', '$http', '$q', function ($resource, $state, $window, $cookies, $location, $http, $q) {



    var url = "http://localhost:4000/api/v1/userFileUpload/getAllUserUpload";
    return $resource(url, {}, {
        query: {
            method: "GET",
            params: { limit: '10', page: '1', order: 'fileName' },
            isArray: true,
            cache: true
        },
        get: {
            method: "GET",
            // params: { limit: '10', page: '1', order: 'fileName' },
            // isArray:true,
            // cache:true
        }

    });
}]);