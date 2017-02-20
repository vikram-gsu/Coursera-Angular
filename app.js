(function(){
	'use strict'
	angular.module('controllerAsApp', [])

	.controller('controllerAsController', controllerAsController)
	.controller('childController', childController)
	function controllerAsController(){
		var parent = this
		parent.value = 2
		parent.obj = {objValue: 're'}
	}

	childController.$inject = ['$scope']
	function childController($scope){
		var child = this
		child.value = 3
		// child.obj = {objValue:'re3'}
		console.log($scope)
	}
	
})()