
var app = angular.module("sbAdminApp");
app.controller("DashboardController", function ($scope) {

    var s = "san";
    console.log(s.slice(0,1).charAt(0).toUpperCase());

    $(function() {

		var d1 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d1.push([i, Math.sin(i)]);
		}

		var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

		// A null signifies separate line segments

		var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

		$.plot("#placeholder", [ d1, d2, d3 ]);

		// Add the Flot version string to the footer

	
	});
  
});