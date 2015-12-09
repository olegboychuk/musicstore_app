CartModule.controller('CartController', function( $scope,CartFactory,AlbumsFactory  ){ 
	$scope.billing = true;
	$scope.cart=[];
	
	CartFactory.registryCartUpadateMsg( function( quantety ){
		// console.log("albumIdcart",albumId);
		console.log("quantety",quantety);
		$scope.cart =  quantety;
		$scope.quantety = quantety.quantety
	   	console.log("$scope.quantety",$scope.quantety);
	   console.log("scopecart",$scope.cart);
	});
	

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