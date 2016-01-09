
CartModule.factory('CartFactory', function( $http,$q,$rootScope,AlbumsFactory,localStorageService,UserAuthService){
	var CartFactory = {};
	var urlBaseOrder = 'api/order';
	var products = [];
	var price = 0;
	var totalPrice = 0;
    var itemsPrice = 0;
    var key = " ";
    var result =[];
    var item = {};
    var cart = {};
    var keyOfUserCart ='';

    $rootScope.$on('statusLogin',function(event,data){
    	alert("status",data);
    	var userObject = UserAuthService.get();
    	keyOfUserCart = userObject.user_id;
	    console.log("userObjectcart",keyOfUserCart);
    });
    
    CartFactory.makeOrder = function( param ){
    	var orderDetails = meetCartUserOrderInfo( param );

        var order = angular.toJson( orderDetails );
       
        console.log("orderDetailsparam",order);
        // while( orderDetails <= orderDetails.length){
        	
        return $http.post( urlBaseOrder,order )

	    	.then( function( result ){
	    		console.log("result",result.data);
	    	})
    		
        // }	
    }


    function meetCartUserOrderInfo( param ){
    	cart = getLocalStorageObject();
    	console.log("ordercart ",cart);
    	var user = $rootScope.idUser;
    	console.log("usercart ",user);
    	var userObj ={'user_id':user};    	
    	var order ={};
    	var orderList= [];

    	for (var i = 0; i < cart.length; i++) {
    		// console.log("i",i);	
    		var album = cart[i].album;

	        order[i] = _.assign( param,album,userObj );
            console.log("orderList0 ",order[i]);
	        orderList.splice(i,1,order[i] );
	        console.log("orderList0 ",orderList);
    		//return orderList[i];
    	}
        console.log("orderList1 ",orderList);
    	return orderList;
    }

    function getLocalStorageObject( keyOfUserCart ){
        return localStorageService.get( keyOfUserCart );
    }

    function setLocalStorageObject( keyOfUserCart ){
    	return localStorageService.set( keyOfUserCart );
    }

    // CartFactory.checkOut = function(){
    	
    // 	// if ( localStorageService!=[] ) {
    // 		//resetLocalStorage();
    // 	   // if ( products!=[] ) {
 	  //   	   console.log( "productsproductsproducts",products );   	   
	   //  	   return localStorageService.set( 'mycart',products );

    // 	   // };
    // 	// };
    // };

	CartFactory.getProducts= function( ){
	   return products;
	}

	/*
	//
	 */
    CartFactory.getTotal = function( ) { 
		calcAddTotal();
		return totalPrice;
	};

	// CartFactory.saveOrder = function( orderObject ){
	// 	return $http.post('api/order', orderObject);
	// }

	function cartUpdated( quantety, album, price){
		
		// build object of current cart item
		//  that contain : quantety of selected album
		//  and object album
	    item = {quantety: quantety, album: album, price:price}; 	   	    
	    
        
	    //value of current album_id
	    //that contain string 
	    key = item.album.album_id;
	    

	    //get array trough all array of cart ordered by album_id
    	result =_.map(products,'album.album_id');
        //console.log("result",result);

    	//function that manage duplicate items in cart array
    	//return updated item 
    	checkIdentity( );

    	//calcAddTotal( item );
    	//return totalPrice;

    	// insert specific album object to cart array
    	products.push(item); 	    	    
    	
    	//calcAddTotal();
	    
	    // save array to local storage
	    console.log("keyOfUserCart111",keyOfUserCart);
	    localStorageService.set( keyOfUserCart,products );
	}

	 function checkIdentity( ){
		
		for ( var i = 0; i <= products.length-1; i++ ) {

			if ( key===result[i] ) {
				item.quantety = (+item.quantety) + (+products[i].quantety);
				item.price=item.quantety*item.price;
				products.splice(i,1);
				return item;
			}else{
				 // console.log(i);
			}
		};
	}



	function calcAddTotal(){
	  	var tpr = _.map( products,'price' );
	  	totalPrice =_.reduce(tpr, function( accumulator, value ) {
                return (+accumulator) + ( +value );
                alert( totalPrice );
        });
		//return totalPrice;
	}

	CartFactory.deleteProduct = function ( albumId ){
		
		for (var i = 0; i <= products.length-1; i++) {
			var key = products[i].album.album_id;
			
			if ( key===albumId ) {

				products.splice( i,1 );

			}else{
				//console.log("delete i",i);
			}
		};
	}

	CartFactory.clearCart = function(){
		
		if ( products ) {
			products.splice( products,products.length );
		};	
	}

	CartFactory.addToCart = function( quantety,albumId ) {
	
		var album = AlbumsFactory.getAlbumDetails( albumId );
		var price = album.album_price;		
		cartUpdated( quantety, album, price );
		//return localStorageService.set( 'mycart',products );
	}

    function toLocalStorage( ){
    	 return localStorageService.set('mycart',products);
    	//console.log("localStorageService",localStorageService);
    }

    function resetLocalStorage(){
    	return localStorageService.clearAll();
    }

    return CartFactory;

});