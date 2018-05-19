
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope) {

    var s = "san";
    console.log(s.slice(0, 1).charAt(0).toUpperCase());

    var playerOne = 120;
    var playerTwo = 130;
    var playerThree = 140;
    var playerFour = 150;
    var playerFive = 160;

    console.log("Console.log" + " " + playerOne);
    console.debug("Console.debug" + " " + playerTwo);
    console.warn("Console.warn" + " " + playerThree);
    console.info("Console.info" + " " + playerFour);
    console.error("Console.error" + " " + playerFive);

   

});