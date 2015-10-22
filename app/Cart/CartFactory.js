CartModule.factory('CartFactory', function(  ){
	var CartFactory = {};
	var products = [];
	var totalPrice = 0;

	function addProduct( productIndex ){
		products.push( productIndex );
	}

	function removeProduct( productIndex ){
		products.splice( products.indexOf( productIndex ), 1 );
	}
	
	CartFactory.deleteProduct = function( productIndex ) {
		var price = ProductsService.getPrice( productIndex );
		
		if ( products.indexOf( productIndex ) != -1 ) {
			totalPrice -= price;
			removeProduct( productIndex );
		}
	};

	CartFactory.insertProduct = function( productIndex ) {
		var price = ProductsService.getPrice( productIndex );	
		if ( products.indexOf( productIndex ) = -1  ) {
			totalPrice += price;
			addProduct( productIndex );
		}
	};

    CartFactory.getTotal = function() { 
		return totalPrice;
	};
    
    CartFactory.getAll = function() {
		return products;
    };
	
	CartFactory.getCartProducts = function() {
		var cartProducts = [];

		for ( var i = 0; i < products.length; i++ )
			cartProducts.push( ProductsService.getProduct( products[i] ) );
			
		return cartProducts;
	}

    return CartFactory;


});