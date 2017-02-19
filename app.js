(function(){
	'use strict'
	angular.module('NameCalculator', [])

	.controller('NameCalculatorController', function($scope){
		
		$scope.name = ''

		$scope.displayCount = () => {
				var localNameCount = 0
				for (var i = $scope.name.length - 1; i >= 0; i--) {
					localNameCount += $scope.name.charCodeAt(i)
				}
				$scope.nameCount = localNameCount
			}
	})
})()