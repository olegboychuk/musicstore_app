CartModule.factory('CartFactory', function( $q,AlbumsFactory  ){
	var CartFactory = {};
	var products = [];
	var totalPrice = 0;
	var deffered = null;
	var cartUpdateFunctions = [];


  // console.log("cartUpdateFunctions",cartUpdateFunctions);
	
	// CartFactory.registryCartUpadateMsg = function( callback ){
	// 	console.log("registryCartUpadateMsg111");
	// 	cartUpdateFunctions.push( callback );
	// }

	CartFactory.getProducts= function( ){
	   return products;
	}

	function cartUpdated( quantety, album ){
		var item = {quantety: quantety, album: album}; 
		products.push(item);
		console.log("cartUpdated",products, cartUpdateFunctions.length, cartUpdateFunctions);

		// for( var i=0; i<cartUpdateFunctions.length; i++ ){
		//     cartUpdateFunctions[i](products);
		// 		console.log("cartUpdateFunctions.cartUpdated");
		// 	}
		}

	 function removeProduct( productId ){
		cartUpdateFunctions.splice( cartUpdateFunctions.indexOf( productId ), 1 );
		console.log("cartUpdateFunctionsdeleted",cartUpdateFunctions);
	}


	CartFactory.addToCart = function( quantety,albumId ) {
		var album = AlbumsFactory.getAlbumDetails(albumId);
		console.log("album",album);
		// if ( cartUpdateFunctions.indexOf( album ) = -1  ) {
			// totalPrice += price;
			cartUpdated( quantety, album );
			//addProduct( album );
	}



	// CartFactory.getProducts = function() {
	// 	console.log("cartUpdateFunctions11",cartUpdateFunctions);
	// 	return cart;
	// }

	// CartFactory.getProducts= function( quantety,album ){
	// 	var item= { quantety,album };
	// 	console.log("object",item);
	// 	var cart = [];
	// 	for( var i=0; i<=cartUpdateFunctions.length; i++ ){
	// 		cart.push( item[i] );
	// 		console.log("cartUpdateobject",cart);
	// 	}
	// 	return cart;
	// 	//products.push( album );
	// }

	// function removeProduct( productId ){
	// 	cartUpdateFunctions.splice( cartUpdateFunctions.indexOf( productId ), 1 );
	// 	console.log("cartUpdateFunctionsdeleted",cartUpdateFunctions);
	// }

	// CartFactory.addToCart = function( quantety,albumId  ) {

	// 	if ( quantety === "undefined" ){
	// 		 quantety = "1";
	// 		console.log("quantetyhomepage",quantety);
	// 	}
	// 	var album = AlbumsFactory.getAlbumDetails(albumId);
	// 		// console.log("album",album);
	// 	//var price = AlbumsFactory.getPrice( productIndex );	
	// 	// if ( products.indexOf( productIndex ) = -1  ) {
	// 	// 	//totalPrice += price;
	// 	 	CartFactory.getProducts( quantety,album );
	// 	// }
	// };
	
	// CartFactory.deleteProduct = function( productId ) {
	// 	//var price = AlbumsFactory.getPrice( productIndex );
	// 			console.log("productId111",productId);

	// 	//if ( cartUpdateFunctions.indexOf( productIndex ) != -1 ) {
	// 		//totalPrice -= price;
	// 		removeProduct( productId );
	// 	//}
	// };


    CartFactory.getTotal = function() { 
		
		return totalPrice;
	};
    
 //    CartFactory.getAll = function() {
	// 	console.log("productsget",products);
	// 	return products;
 //    };
	
	// CartFactory.getCartProducts = function() {
	// 	var cartProducts = [];

	// 	for ( var i = 0; i < products.length; i++ )
	// 		cartProducts.push( ProductsService.getProduct( products[i] ) );
			
	// 	return cartProducts;
	// }

    return CartFactory;


});