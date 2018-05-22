'use strict';

var app = angular.module("sbAdminApp");
app.factory("userUploadFactory", ['$resource', '$state', '$window', '$cookies', '$location', function ($resource, $state, $window, $cookies, $location) {

    var useruploadOBJ = {};
    useruploadOBJ.getAllUserUpload = function () {
        return $resource('http://localhost:4000/api/v1/userFileUpload/getAllUserUpload',
            { limit: '10', page: '1', order: 'fileName' });

    }

    return useruploadOBJ;


}]);

