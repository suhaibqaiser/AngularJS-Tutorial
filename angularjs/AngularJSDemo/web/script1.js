var app = angular.module("MyApp", []);

app.controller("MyCtrl", ["$scope", function($scope) {
	$scope.model = {};
    $scope.model.text1 = "";
}]);

app.controller("MyNestedCtrl", function($scope) {
});