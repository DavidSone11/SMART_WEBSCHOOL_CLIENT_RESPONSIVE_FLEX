
var app = angular.module("sbAdminApp");
app.directive("userPlan", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/UserPlan/UserPlan.directive.html',
        scope: true,
        compile: function (elem, attrs) {
            // elem.css("border-bottom", "1px solid grey");
            // elem.css("border-top", "1px solid grey");
            elem.css("margin", "0 0 0 0");

            var link = function (scope, elem, attrs) {

                // elem.html("User First Name: <b>" + 'santosh' + "</b> , User Last Name: <b>" + 'sahu' + "</b>" + ", User Age: <b>" + '21' + "</b>");
                // elem.css("background-color", "yellow");
            }
            return link;
        },

        controller: function ($scope) {

         

        }

    }
}]);