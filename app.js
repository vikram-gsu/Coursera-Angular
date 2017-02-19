(function(){
	'use strict'
	angular.module('OneTimeBindingApp', [])

	.controller('OneTimeBindingController', OneTimeBindingController)
	
	OneTimeBindingController.$inject = ['$scope']
	function OneTimeBindingController($scope){
		$scope.ShowNumberOfWatchers = () => {
			console.log('Number of watchers:',$scope.$$watchersCount)
		}
		$scope.setFullName = () => {
			$scope.fullName = $scope.firstName + ' ' + 'Reddy'
		}	
	}
	
})()