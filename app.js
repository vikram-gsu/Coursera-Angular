(function(){
	'use strict'
	angular.module('CustFilterApp', [])

	.controller('CustFilterController', CustFilterController)
	.filter('loves', LovesFilter)
	.filter('findReplace', FindReplaceFilter)

	CustFilterController.$inject = ['$scope', 'lovesFilter']
	function CustFilterController($scope, lovesFilter){
		$scope.message = 'likes is likes'
		$scope.otherMessage = lovesFilter($scope.message)

	}
	function escapeRegExp(str) {
  	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
	}
	function LovesFilter(){
		return (input) => {
			input = input || ''

			input = input.replace(new RegExp('likes', 'g'), 'loves')
			return input
		}
	}
	function FindReplaceFilter(){
		return (input, findString, replaceString) => {
			input = input || ''
			input = input.replace(new RegExp(findString, 'g'), replaceString)
			return input
		}
	}
})()