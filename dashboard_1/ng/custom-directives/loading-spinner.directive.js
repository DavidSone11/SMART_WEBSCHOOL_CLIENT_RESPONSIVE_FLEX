

var app = angular.module("sbAdminApp");
app.directive("loadingSpinner", ['$parse', '$compile', function ($parse, $compile) {

    return {
        restrict: 'EA',
        scope: {
            loadingSpinner: '='
        },
        transclude: true,
        template: '<div ng-show="loadingSpinner" class= "super-cool-spinner">' +
            '<i class="fa fa-spinner fa-spin"></i>' +
            '</div>' +
            '<div ng-transclude ng-show="!loadingSpinner"></div>',


        link: function (scope, elem, attrs) {
            
        },
    }


}]);