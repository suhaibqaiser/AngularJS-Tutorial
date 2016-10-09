// Author: Suhaib Qaiser www.suhaibqaiser.com
var app = angular.module("myApp", ['appServices']);

app.controller("TextCtrl", ["$scope", "AppService", function($scope, AppService) {
    $scope.textModel = {};
    
    $scope.textModel.value1 = AppService.getObj();;
    
    $scope.textValue = AppService.loadValue();
	
	$scope.textChanged1 = function() {
		AppService.setObj($scope.textModel.value1);
	}
	
}]);

app.directive('nestedInput', function() {
    return {
        restrict: 'AE',
        scope: false,
        templateUrl: 'nestedexample3.html',
        //template: '<div>Nested Input: <input id=\"text2\" ng-model=\"nestedTextModel.value1\"></div>',
        controller: 'NestedTextCtrl'
    };
});

app.controller("NestedTextCtrl", ["$scope","AppService", function($scope, AppService) {
    $scope.nestedTextModel = {};
    
    $scope.nestedTextModel.value1 = AppService.getObj();
	
	$scope.textChanged2 = function() {
		AppService.setObj($scope.nestedTextModel.value1);
	};
	
	$scope.fetchValue = function() {
		$scope.nestedTextModel.value1  = AppService.getObj();
	};
}]);

var appServices = angular.module('appServices', []);

appServices.factory(
    'AppService', 
    function ($q) {
    	
    	serviceObj = "Initial Object";
    	function getObj() {
			return serviceObj;
		}
		function setObj(textValue) {
			serviceObj = textValue;
		}
    	function loadValue() {
    		return "Service Value";
    	}
    	
    	return {
    		loadValue : loadValue,
			getObj: getObj,
			setObj: setObj
    	};
    });
 