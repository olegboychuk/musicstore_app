
CartModule.factory('CartFactory', function( $http,$q,$rootScope,
	AlbumsFactory,localStorageService,UserAuthService,AUTH_EVENTS){
	var CartFactory = {};
	var urlBaseOrder = 'api/order';
	var products = [];
	var totalPrice = 0;
    var itemsPrice = 0;
    var key = " ";
    var result =[];
    var item = {};
    var cart = {};
    var keyOfUserCart ='underfined';

    $rootScope.$on('statusLogin',function(event,data){
    	if ( AUTH_EVENTS.loginSuccess === "auth-login-success" ){
	    	var userObject = UserAuthService.get();
	    	keyOfUserCart = userObject.user_id;
	    	addToProductsFromLocalStorage( keyOfUserCart );
	    }
    });

    
    CartFactory.makeOrder = function( param ){
    	var orderDetails = meetCartUserOrderInfo( param );
        var order = angular.toJson( orderDetails );      

        deferred = $q.defer();
        
        $http.post( urlBaseOrder,order )
	    .success( function( result ){
	    	console.log("result",result);
	    	if ( result ) {
	    		removeItemLocalStorage( keyOfUserCart );
	    		deferred.resolve({'msg':'Thank you! Your ordered some products from our store.You can check your orders in your account page. '});
	    	};
	    }).error( function(){
	    	// alert("Something went wrong");
	    })
	    return deferred.promise;
    };


    function meetCartUserOrderInfo( param ){

    	cart = getLocalStorageObject( keyOfUserCart );
    	
    	var user = keyOfUserCart;
    	var userObj ={'user_id':user};    	  	
    	var order ={};
    	var orderList= [];
    	var order_total ={};

    	for (var i = 0; i < cart.length; i++) {    	
    		var album = cart[i].album;
    		var total = { "order_total":cart[i].price};
	       
	        order[i] = _.assign( album,param,userObj,total );
	        orderList.push( order[i] );
    	}
    	return orderList;
    }


//------set function of localstorage------

    function getLocalStorageObject( keyOfUserCart ){
        return localStorageService.get( keyOfUserCart );
    }

    function setLocalStorageObject( keyOfUserCart,products ){
    	if (keyOfUserCart === 'underfined') {
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
                console.log("totalPrice",tpr,accumulator,value)
                return (+accumulator) + ( +value );
        });
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
		console.log("albumprice",album);
		//var price = album.album_price;		
		cartUpdated( quantety, album, album.album_price );
	}

    return CartFactory;

});

