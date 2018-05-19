
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope, $compile) {


    // var playerOne = 120;
    // var playerTwo = 130;
    // var playerThree = 140;
    // var playerFour = 150;
    // var playerFive = 160;

    // console.log("Console.log" + " " + playerOne);
    // console.debug("Console.debug" + " " + playerTwo);
    // console.warn("Console.warn" + " " + playerThree);
    // console.info("Console.info" + " " + playerFour);
    // console.error("Console.error" + " " + playerFive);

    $scope.chart = null;
    $scope.config = {};
    $scope.config.data1 = " 30, 20, 50, 40, 60, 50";
    $scope.config.data2 = "200, 130, 90, 240, 130, 220";
    $scope.config.data3 = " 300, 200, 160, 400, 250, 250";
    $scope.config.data4 = "200, 130, 90, 240, 130, 220";
    $scope.config.data5 = "130, 120, 150, 140, 160, 150";
    $scope.config.data6 = "90, 70, 20, 50, 60, 120";

    $scope.typeOptions = ["bar", "bar", "spline", "line", "bar", "area"];

    $scope.config.type1 = $scope.typeOptions[0];
    $scope.config.type2 = $scope.typeOptions[1];
    $scope.config.type3 = $scope.typeOptions[2];
    $scope.config.type4 = $scope.typeOptions[3];
    $scope.config.type5 = $scope.typeOptions[4];
    $scope.config.type6 = $scope.typeOptions[5];


    $scope.creatChart = function () {
        var config = {};
        config.bindto = '#c3chart';
        config.data = {};
        config.data.json = {};
        config.data.json.data1 = $scope.config.data1.split(",");
        config.data.json.data2 = $scope.config.data2.split(",");
        config.data.json.data3 = $scope.config.data3.split(",");
        config.data.json.data4 = $scope.config.data4.split(",");
        config.data.json.data5 = $scope.config.data5.split(",");
        config.data.json.data6 = $scope.config.data6.split(",");
        config.axis = { "y": { "label": { "text": "Number of items", "position": "outer-middle" } } };
        config.data.types = {
            "data1": $scope.config.type1, "data2": $scope.config.type2,
            "data3": $scope.config.type3, "data4": $scope.config.type4,
            "data5": $scope.config.type5, "data6": $scope.config.type7
        };

        var template = '<div class="col"> 	<div id="c3chart"></div> </div>'
        angular.element(document.body).append($compile(template)($scope));

        $scope.chart = c3.generate(config);


    }

    $scope.onclickRemove = function () {
        var charts = angular.element(document.body).find('.col')
        if (charts.length) charts[charts.length - 1].remove();
    }


    /*   var chart = c3.generate({
            data: {
              columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250],
                ['data4', 200, 130, 90, 240, 130, 220],
                ['data5', 130, 120, 150, 140, 160, 150],
                ['data6', 90, 70, 20, 50, 60, 120],
              ],
              types: {
                data1: 'bar',
                data2: 'bar',
                data3: 'spline',
                data4: 'line',
                data5: 'bar',
                data6: 'area'
              },
              groups: [
                ['data1','data2']
              ]
            },
            axis: {
              x: {
                type: 'categorized'
              }
            }
        });*/


});