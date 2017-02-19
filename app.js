(function(){
	'use strict'
	angular.module('FoodApp', [])

	.controller('FoodController', FoodController)

	FoodController.$inject = ['$scope']
	function FoodController($scope){
		
		$scope.food = ''
		$scope.checkiftoomuch = () => {
			var foodItems = $scope.food.split(',')
			
			var numberOfItems = foodItems.filter(item => item.trim().length>0)
																	.length
			
			if ($scope.food == ''){
				$scope.response = "Please enter food first!"
			}else if(numberOfItems >0 && numberOfItems <= 3){
				$scope.response = 'Enjoy!'
			}else{
				$scope.response = 'Too much!'
			}
		}
	}
})()