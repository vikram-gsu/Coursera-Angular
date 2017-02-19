(function(){
	'use strict'
	angular.module('ngrepeatApp', [])

	.controller('ngrepeatController', ngrepeatController)
	
	ngrepeatController.$inject = ['$scope']
	function ngrepeatController($scope){
		$scope.shoppingCart = [
			{name: 'milk',
			quantity: 2},
			{name: 'chocolate',
			quantity: 10},
			{name: 'condom',
			quantity: 20},
			{name: 'guitar',
			quantity: 1},
			{name: 'camera',
			quantity: 10},

		]
		$scope.addItem = ()=> {
			$scope.shoppingCart.push({name: $scope.newItemName, quantity: $scope.newItemQuantity})
		}
	}
	
})()