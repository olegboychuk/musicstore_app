CartModule.directive('myCart', ['CartFactory', function(CartFactory){
	return {
		restrict: 'E',
		templateUrl: 'app/Cart/_cart.html',
		//controller: 'CartController'
		link: function link(scope, element, attrs) {
			
	        scope.cart=[];
			element.on('$destroy', function() {
	      	   console.log("registryCartUpadateMsgcancel");
	    	// console.log("registryCartUpadateMsg", element,attrs,scope);
	    	});

			scope.cart = CartFactory.getProducts();
			console.log("scope.cart",scope.cart);
	
			scope.countItems = function(){
				scope.count=scope.cart.length;
			}
			
			scope.totalPr = function(){
			scope.total = CartFactory.getTotal();
			console.log("scope.total",scope.total);
			} 

			scope.deleteProduct = function(album_id){
				console.log("album_id");
				CartFactory.deleteProduct(album_id);
		   }

		   scope.checkOut = function(){
		   	CartFactory.checkOut();
		   }

	    }
	}
}]);