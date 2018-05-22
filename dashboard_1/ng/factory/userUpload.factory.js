'use strict';

var app = angular.module("sbAdminApp");
app.factory("userUploadFactory", ['$resource', '$state', '$window', '$cookies', '$location', '$http', '$q', function ($resource, $state, $window, $cookies, $location, $http, $q) {


    var userRes = {
        getAllUserUpload: function () {
            return $resource('http://localhost:4000/api/v1/userFileUpload/getAllUserUpload',
                { limit: '10', page: '1', order: 'fileName' });

        },
        getUpload: function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:4000/api/v1/userFileUpload/getAllUserUpload',
                params: { limit: '10', page: '1', order: 'fileName' }
            }).then(function (res) {
                deferred.resolve(res);
            }, function (error) {
                deferred.reject(error);
            })
            return deferred.promise;
        }
    }

    return userRes;



}]);

