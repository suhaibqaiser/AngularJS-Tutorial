// Author: Suhaib Qaiser www.suhaibqaiser.com
var app = angular.module("myApp", []);

app.controller("TextCtrl", ["$scope", function($scope) {
    $scope.textModel = {};
    
    $scope.textModel.value1 = "";
}]);