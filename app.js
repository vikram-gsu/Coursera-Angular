(function(){
	'use strict'
	angular.module('customServiceApp', [])

	.controller('customServiceController', customServiceController)
	.provider('shoppingCartItemsService', shoppingCartProvider)
	.config(Config)

	Config.$inject = ['shoppingCartItemsServiceProvider']
	function Config(shoppingCartItemsServiceProvider){
		shoppingCartItemsServiceProvider.defaults.maxItems = 2
	}
	customServiceController.$inject = ['shoppingCartItemsService']
	function customServiceController(shoppingCartItemsService){
		var addItems = this
		// var shoppingList = shoppingCartItemsService()
		addItems.addItem = () => {
			try{
				shoppingCartItemsService.addItems(addItems.itemQuantity, addItems.itemName)
			}catch(e){
				addItems.errorMessage = e.message
			}
		}

	
		addItems.items = shoppingCartItemsService.getItems()
		addItems.removeItem = (index) => {
			shoppingCartItemsService.removeItem(index)
		}
	}

	function shoppingCartItems(maxItems){
		var service = this

		var items = []

		
		service.addItems = (quantity, name) => {
			if((maxItems === undefined) || ((maxItems !== undefined) && items.length < maxItems))
				items.push({quantity: quantity, name: name})
			else 
				throw new Error('max items reached')
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
		provider.$get = () => {
			return new shoppingCartItems(provider.defaults.maxItems)
		}
	}


	
})()