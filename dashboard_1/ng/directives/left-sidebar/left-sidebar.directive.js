
var app = angular.module("sbAdminApp");
app.directive("leftSidebar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/left-sidebar/left-sidebar.tmpl.html',

        controller: function ($scope, Fullscreen) {

            $(function () {
                $('.has-sub-menu').click(function (e) {
                    $(this).toggleClass('tap');
                    $(this).css({ 'transition': 'width 2s' });
                });


            });




        }

    }
}]);