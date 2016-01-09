
CartModule.factory('CartFactory', function( $http,$q,$rootScope,AlbumsFactory,localStorageService,UserAuthService,AUTH_EVENTS){
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
    	alert(data);
 
    	if ( AUTH_EVENTS.loginSuccess === "auth-login-success" ){
	    	var userObject = UserAuthService.get();
	    	keyOfUserCart = userObject.user_id;
	    	addToProductsFromLocalStorage( keyOfUserCart );
	    }
    });


    // $rootScope.$on('statusLogin',function(event,data){
    // 	alert(data);
    // 	if ( AUTH_EVENTS.notAuthenticated === 'auth-not-authenticated' ){
	   //  	// keyOfUserCart = 'guest';
	   //  }
	   //  // keyOfUserCart='';
    // })
    
    CartFactory.makeOrder = function( param ){
    	console.log("paramamakeOrder",param );
    	var orderDetails = meetCartUserOrderInfo( param );
        console.log("orderDetailsparam000",orderDetails);
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


        console.log("keyOfUserCart",keyOfUserCart);
    	cart = getLocalStorageObject( keyOfUserCart );
    	console.log("ordercart ",cart);
    	
    	var user = keyOfUserCart;
    	console.log("usercart ",user); 	
    	var userObj ={'user_id':user};    	
    	
    	var order ={};
    	var orderList= [];

    	for (var i = 0; i < cart.length; i++) {
    		console.log("i",i);	
    	
    		console.log("paramassign",param );
    		var album = cart[i].album;
    		console.log("album specific i ",album);
	        var order_total 
	        order[i] = _.assign( album,param,userObj );
            console.log("orderList0asign ",order[i]);
	       
	         orderList.push( order[i] );
	        console.log("orderListsplice ",orderList);
    	   // return orderList;
    	}
        //console.log("orderList1 ",orderList);
    	return orderList;
    }


//------set function of localstorage------

    function getLocalStorageObject( keyOfUserCart ){
        return localStorageService.get( keyOfUserCart );
    }

    function setLocalStorageObject( keyOfUserCart,products ){
    	if (keyOfUserCart === 'underfined') {
    		alert(keyOfUserCart);
    		removeItemLocalStorage(keyOfUserCart);
    		//--- localstorage for unregisted users  
    	}else{
    		return localStorageService.set( keyOfUserCart,products );
    	}
    }

    function removeItemLocalStorage( keyOfUserCart ){
    	console.log("keyOfUserCart.underfined");
    	return localStorageService.remove( keyOfUserCart );
    }

     function resetLocalStorage(){
    	alert("kuku");
    	return localStorageService.clearAll();
    }

    function addToProductsFromLocalStorage( keyOfUserCart ){
    	var data = getLocalStorageObject( keyOfUserCart );
    		if ( data ) {
    			products = data;
    	        console.log(data);
    		}else{
    			return false;
    		}	
    }

    CartFactory.checkOut = function(){
       return localStorageService.get( keyOfUserCart,products );
    };

//------set function of localstorage-------



	CartFactory.getProducts= function( ){
	   return products;
	}


    CartFactory.getTotal = function( ) { 
		calcAddTotal();
		return totalPrice;
	};


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
    	console.log("productsonclick",products);
    	//calcAddTotal();
	    
	    // save array to local storage
	    console.log("keyOfUserCart111",keyOfUserCart);
	   
	    setLocalStorageObject( keyOfUserCart,products );
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
			removeItemLocalStorage( keyOfUserCart );
		};	
	}

	CartFactory.addToCart = function( quantety,albumId ) {
	
		var album = AlbumsFactory.getAlbumDetails( albumId );
		var price = album.album_price;		
		cartUpdated( quantety, album, price );
	}

    return CartFactory;

});