CartModule.directive('myCart', ['CartFactory', function(CartFactory){
	return {
		restrict: 'E',
		templateUrl: 'app/Cart/_cart.html',
		//controller: 'CartController'
		link: function link(scope, element, attrs) {
		   	scope.billing = true;
	        scope.cart=[];
			element.on('$destroy', function() {
	      	   console.log("registryCartUpadateMsgcancel");
	    	});

			scope.cart = CartFactory.getProducts();
			console.log("registryCartUpadateMsg", element);
			/*CartFactory.registryCartUpadateMsg( function(products){
				scope.cart =  products;
				//scope.quantety = item.item.quantety;
			   	console.log("CartUpdated diective",products);
			    console.log("scopecart",scope.cart);
			});*/
			



			//scope.getCartStatus = function(){
			// 	var cart = CartFactory.getProducts();
		 //        console.log("cart",cart);		

			// 	 scope.cart = cart;
		 //        //scope.quantety = quantety
		 //        console.log("scopecart",scope.cart);		
			// }
			// scope.getCartStatus();

			scope.deleteProduct = function(index){
				console.log("index",index);
				CartFactory.deleteProduct(index);
			}

			scope.toogleActive = function(e){
				if ( e.currentTarget ='active') {
				   scope.billing = !scope.billing;
				    // console.log("e",e.delegateTarget);
		        };
			}
			
			scope.showPayment = function(e){
		        if ( e.currentTarget ='active') {
				    scope.payment = !scope.payment;
				    scope.active = false;
				    // console.log("e",e.delegateTarget);
		        };
			}

			scope.showForm = function(e){
		        if ( e.currentTarget ='active') {
				    scope.forma = !scope.forma;
				    scope.active = false;
				    // console.log("e",e.delegateTarget);
		        };
			}

	    }
	}
}]);