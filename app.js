(function(){
	'use strict'
	angular.module('DIApp', [])

	.controller('DIController', DIController)

	DIController.$inject = ['$scope', '$filter']
	function DIController($scope, $filter){
		
		$scope.name = 'Vikram'
		var upCase = $filter('uppercase')

		$scope.toUpCase = () => $scope.name = upCase($scope.name)
	}
})()