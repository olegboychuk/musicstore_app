CartModule.controller('CartController', function( $scope,CartFactory,AlbumsFactory  ){ 
	$scope.billing = true;
    console.log("$scope3",CartFactory);
	console.log("$scope4",AlbumsFactory);
	$scope.cart=[];
	// $scope.viewCart = function(){
		//$scope.cart = CartFactory.getProducts();
	
		CartFactory.registryCartUpadateMsg( function( quantety, albumId ){
			$scope.cart =  
		});

		// console.log("cart",cart);
		// cart.then(function(data){
		// 	console.log("data",data);
		// 	$scope.cart=data;
		// })
		console.log("scopecart",$scope.cart);
// 	}
// $scope.viewCart();

	$scope.toogleActive = function(e){
		if ( e.currentTarget ='active') {
		   $scope.billing = !$scope.billing;
		    console.log("e",e.delegateTarget);
        };
	}
	
	$scope.showPayment = function(e){
        if ( e.currentTarget ='active') {
		    $scope.payment = !$scope.payment;
		    $scope.active = false;
		    console.log("e",e.delegateTarget);
        };
	}

	$scope.showForm = function(e){
        if ( e.currentTarget ='active') {
		    $scope.forma = !$scope.forma;
		    $scope.active = false;
		    console.log("e",e.delegateTarget);
        };
	}


});