(function(){
	'use strict'
	angular.module('customServiceApp', [])

	.controller('customServiceController', customServiceController)
	.factory('shoppingCartItemsService', shoppingCartFactory)

	customServiceController.$inject = ['shoppingCartItemsService']
	function customServiceController(shoppingCartItemsService){
		var addItems = this
		var shoppingList = shoppingCartItemsService(1)
		addItems.addItem = () => {
			shoppingList.addItems(addItems.itemQuantity, addItems.itemName)
		}

	
		addItems.items = shoppingList.getItems()
		addItems.removeItem = (index) => {
			shoppingList.removeItem(index)
		}
	}

	function shoppingCartItems(maxItems){
		var service = this

		var items = []

		
		service.addItems = (quantity, name) => {
			if((maxItems === undefined) || ((maxItems !== undefined) && items.length < maxItems))
				items.push({quantity: quantity, name: name})
			else 
				console.log('max items reached')
		}

		service.getItems = () => {
			return items
		}

		service.removeItem = (index) => {
			items.splice(index,1)
		}
	}

	function shoppingCartFactory(){
		return	(maxItems) => {
			return new shoppingCartItems(maxItems)
		}
	}


	
})()