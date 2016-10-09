// Author: Suhaib Qaiser www.suhaibqaiser.com
var app = angular.module("myApp", []);

app.controller("TextCtrl", ["$scope", function($scope) {
    $scope.textModel = {};
    
    $scope.textModel.value1 = "";
    
    $scope.textValue = "";
}]);

app.directive('nestedInput', function() {
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'nestedexample3.html',
        //template: '<div><label >abcd</label>Nested Input: <input id=\"text2\" ng-model=\"nestedTextModel.value1\"></div>',
        controller: 'NestedTextCtrl'
    };
});

app.controller("NestedTextCtrl", ["$scope", function($scope) {
    $scope.nestedTextModel = {};
    
    $scope.nestedTextModel.value1 = "";
}]);