(function(){
	'use strict'
	angular.module('customServiceApp', [])

	.controller('customServiceController', customServiceController)
	.controller('showItemsListController', showItemsListController)
	.service('shoppingCartItemsService', shoppingCartItems)

	customServiceController.$inject = ['shoppingCartItemsService']
	function customServiceController(shoppingCartItemsService){
		var addItems = this
		addItems.addItem = () => {
			shoppingCartItemsService.addItems(addItems.itemQuantity, addItems.itemName)
		}

	}

	customServiceController.$inject = ['shoppingCartItemsService']
	function showItemsListController(shoppingCartItemsService){
		var showItems = this

		showItems.items = shoppingCartItemsService.getItems()
		showItems.removeItem = (index) => {
			shoppingCartItemsService.removeItem(index)
		}
	}

	function shoppingCartItems(){
		var service = this

		var items = []

		service.addItems = (quantity, name) => {
			items.push({quantity: quantity, name: name})
		}

		service.getItems = () => {
			return items
		}

		service.removeItem = (index) => {
			items.splice(index,1)
		}
	}


	
})()