CartModule.factory('CartFactory', function( $q,AlbumsFactory  ){
	var CartFactory = {};
	var products = [];
	var totalPrice = 0;
	var deffered = null;
	var cartUpdateFunctions = [];

    console.log("$scope",CartFactory);
	console.log("$scope2",AlbumsFactory);


	CartFactory.registryCartUpadateMsg = function( callback ){
		cartUpdateFunctions.push( callback );
	}

	function cartUpdated( quantety, albumId ){
		for( var i=0; i<cartUpdateFunctions.length; i++ ){
			cartUpdateFunctions[i]( quantety, albumId );
		}
	}

	function addProduct( album ){
		products.push( album );
		console.log("products111",products);
	}

	function removeProduct( productIndex ){
		products.splice( products.indexOf( productIndex ), 1 );
	}
	
	CartFactory.addToCart = function( quantety,albumId ) {
		console.log("quantety111",quantety);
		console.log("albumId111",albumId);
		cartUpdated( quantety, albumId );

		var album = AlbumsFactory.getAlbumDetails(albumId)
		console.log("album",album);
		// if ( products.indexOf( albumId ) = -1  ) {
			// totalPrice += price;
			addProduct( album );
		// }
	}

	CartFactory.getProducts = function() {
		// if( products = [] ){
		// 	deferred = $q.defer();	
		// 	console.log("deferred",deferred);
		// 	console.log("productsget",products);
		// 	deffered.resolve({products:products});
		//     console.log("deferred.promise",deferred.promise);
		// 	return deferred.promise;
		// }
		console.log("productsget111",products);
		return products
	
	}

	// CartFactory.insertProduct = function( productIndex ) {
	// 	var price = AlbumsFactory.getPrice( productIndex );	
	// 	if ( products.indexOf( productIndex ) = -1  ) {
	// 		totalPrice += price;
	// 		addProduct( productIndex );
	// 	}
	// };
	
	CartFactory.deleteProduct = function( productIndex ) {
		var price = AlbumsFactory.getPrice( productIndex );
		
		if ( products.indexOf( productIndex ) != -1 ) {
			totalPrice -= price;
			removeProduct( productIndex );
		}
	};


    CartFactory.getTotal = function() { 
		
		return totalPrice;
	};
    
    CartFactory.getAll = function() {
		console.log("productsget",products);
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