(function(){
	'use strict'
	angular.module('DigestApp', [])

	.controller('DigestController', DigestController)
	
	DigestController.$inject = ['$scope', '$timeout']
	function DigestController($scope, $timeout){
		$scope.counter = 0
		$scope.increment = () => {
			$timeout(function(){
				$scope.counter += 1
				console.log("Increment executed!")
			}, 2000)

			// setTimeout(function(){
			// 	$scope.counter += 1
			// 	console.log("Increment executed!")
			// 	$scope.$digest()
			// }, 2000)

			// setTimeout(function(){
			// 	$scope.$apply(function(){
			// 		$scope.counter += 1
			// 		console.log('Increment executed!')
			// 	})
			// }, 2000)
		}
	}
})()