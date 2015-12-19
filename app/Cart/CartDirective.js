CartModule.directive('myCart', ['CartFactory', function(CartFactory){
	return {
		restrict: 'E',
		templateUrl: 'app/Cart/_cart.html',
		//controller: 'CartController'
		link: function link(scope, element, attrs) {
			//alert("working");
			console.log("scope",scope);
			scope.count=0;
	        scope.cart=[];
			element.on('$destroy', function() {
	      	   console.log("registryCartUpadateMsgcancel");
	    	// console.log("registryCartUpadateMsg", element,attrs,scope);
	    	});

			scope.cart = CartFactory.getProducts();
	
			scope.countItems = function(){
				scope.count=scope.cart.length;
			}
			
			scope.totalPr = function(){
			   scope.total = CartFactory.getTotal();
			} 

			scope.deleteProduct = function(album_id){
				CartFactory.deleteProduct(album_id);
		   }

		   scope.checkOut = function(){
		   	 CartFactory.checkOut();
		   }

		   scope.clearCart = function(){
		   	 CartFactory.clearCart();
		   }
	    }
	}
}]);