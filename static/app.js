var myApp = angular.module('mainModule', []);

myApp.controller('kazarin_controller', ["$scope", "$window", "$http", function($scope, $window, $http) {

    console.log("Initializing kazarin_controller");

    $scope.popup = function() {
    	window.alert("This code is private for academic reasons. Connect with me, and I can tell you all about it!")
	}
	$scope.popup2 = function() {
    	window.alert("This code is private as it is an ongoing research project. Connect with me, and I can tell you all about it!")
	}

}]);