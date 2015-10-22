CartModule.factory('Cart', function( ProductService ){
	var Cart = {};
	var products = [];
	var totalPrice = 0;

	function addProduct( productIndex ){
		products.push( productIndex );
	};

	function removeProduct( productIndex ){
		products.splice( products.indexOf( productIndex ), 1 );
	};
	Cart.deleteProduct = function( productIndex ) {
		var price = ProductsService.getPrice( productIndex );
		
		if ( products.indexOf( productIndex ) != -1 ) {
			totalPrice -= price;
			removeProduct( productIndex );
		}; 
	Cart.insertProduct = function( productIndex ) {
		var price = ProductsService.getPrice( productIndex );	
		if ( products.indexOf( productIndex ) = -1  ) {
			totalPrice += price;
			addProduct( productIndex );
		}
	}

    Cart.getTotal = function() { 
		return totalPrice;
	}
    
    Cart.getAll = function() {
		return products;
    };
	
	Cart.getCartProducts = function() {
		var cartProducts = [];

		for ( var i = 0; i < products.length; i++ )
			cartProducts.push( ProductsService.getProduct( products[i] ) );
			
		return cartProducts;
	}

    return Cart;


});