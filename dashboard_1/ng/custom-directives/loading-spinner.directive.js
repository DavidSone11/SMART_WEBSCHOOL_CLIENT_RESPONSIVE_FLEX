

var app = angular.module("sbAdminApp");
app.directive("LoadingSpinner", ['$parse', '$compile', function ($parse, $compile) {

    return {
        restrict: 'A',
        template: '<div ng-show="requestLoading" class= "super-cool-spinner" > '+
                    'Loading text with the spinner...'+
                    '</div>' +
                    '<div ng-transclude ng-show="!requestLoading"></div>',


        link: function (scope, elem, attrs) {

        },
    }


}]);