(function(){
	'use strict'
	angular.module('customServiceApp', [])

	.controller('customServiceController', customServiceController)
	.provider('shoppingCartItemsService', shoppingCartProvider)
	.config(Config)
	.service('weightLossFilterService', weightLossFilterService)
	.directive('listItem', ListItem)
	.controller('shoppingListDirectiveController', ShoppingListDirectiveController)
	
	function ListItem(){
		var ddo = {
			// restrict: 'E',
			templateUrl: 'listItem.html',
			scope: {
				items: '<',
				title: '@title'
			},
			controller: 'shoppingListDirectiveController',
			controllerAs: 'list',
			bindToController: true
		}
		return ddo
	}

	function ShoppingListDirectiveController(){
		var list = this

		list.cookiesInList = function(){
			for (var i = list.items.length - 1; i >= 0; i--) {
				if(list.items[i].toLowerCase.indexOf('chips') !== -1){
					return true
				}
			}
			return false
		}

	}
	Config.$inject = ['shoppingCartItemsServiceProvider']
	function Config(shoppingCartItemsServiceProvider){
		shoppingCartItemsServiceProvider.defaults.maxItems = 2
	}
	customServiceController.$inject = ['shoppingCartItemsService']
	function customServiceController(shoppingCartItemsService){
		var addItems = this
		// var shoppingList = shoppingCartItemsService()
		addItems.title = "Shopping list(" + "0"+ " items)"
		addItems.addItem = () => {
			try{
				shoppingCartItemsService.addItems(addItems.itemQuantity, addItems.itemName)
				.then(response => addItems.title = "Shopping list(" + addItems.items.length+ " items)"
)
				.catch(e=> addItems.errorMessage = e.message)
			}catch(e){
				addItems.errorMessage = e.message
			}
		}

	
		addItems.items = shoppingCartItemsService.getItems()
		addItems.removeItem = (index) => {

			shoppingCartItemsService.removeItem(index)
			addItems.title = "Shopping list(" + addItems.items.length+ " items)"

		}
	}

	shoppingCartItemsService.$inject = ['$q', 'weightLossFilterService']
	function shoppingCartItemsService($q, weightLossFilterService, maxItems){
		var service = this

		var items = []

		service.addItems = (quantity, name) => {
			
			var checkNamePromise = weightLossFilterService.checkName(name)
			var checkQuantityPromise = weightLossFilterService.checkQuantity(quantity)
			console.log('past the decl')
			return $q.all([checkQuantityPromise])
				.then((response) => {
					if((maxItems === undefined) || ((maxItems !== undefined) && items.length < maxItems))
						items.push({quantity: quantity, name: name})
					else 
						throw new Error('max items reached')
				})
				.catch(error => {
					throw new Error(error)
				})
		}

		service.getItems = () => {
			return items
		}

		service.removeItem = (index) => {
			items.splice(index,1)
		}
	}

	function shoppingCartProvider(){
		var provider = this

		provider.defaults = {
			maxItems: 1
		}
		provider.$get = ($q, weightLossFilterService) => {
			return new shoppingCartItemsService($q, weightLossFilterService, provider.defaults.maxItems)
		}
	}

	weightLossFilterService.$inject = ['$q', '$timeout']
	function weightLossFilterService($q, $timeout){
		var service = this
		// console.log
		service.checkName = (name) => {
			var deferred = $q.defer()

			$timeout(function(){
				if(name.toLowerCase().indexOf('cookie') != -1){
					deferred.reject('No cookies for you')
				}else{
					deferred.resolve()
				}
			}, 3000)

			return deferred.promise
		}
		service.checkQuantity = (quantity) => {
			var deferred = $q.defer()

			$timeout(function(){
				if(quantity > 3){
					deferred.reject('Too many bags')
				}else{
					deferred.resolve()
				}
			}, 1000)
			return deferred.promise
		}


	}


	
})()