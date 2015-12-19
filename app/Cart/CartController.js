CartModule.controller('CartController', function( $scope,localStorageService,AlbumsFactory,CartFactory ){ 
	    $scope.billing = true;

	    $scope.total =  CartFactory.getTotal();
	    console.log("cartToPay",$scope.cart);

        $scope.cartToPay = function(){
        	var cart = CartFactory.checkOut();
        	$scope.cart = localStorageService.get('mycart');
        	console.log("cartToPay",$scope.cart);
        }
        $scope.cartToPay();

       $scope.saveOrder = function(xxx){
       		 CartFactory.saveOrder(xxx);
       }
	   

		$scope.toogleActive = function(e){
			if ( e.currentTarget ='active') {
			   $scope.billing = !$scope.billing;
			    // console.log("e",e.delegateTarget);
	        };
		}
		
		$scope.showPayment = function(e){
	        if ( e.currentTarget ='active') {
			    $scope.payment = !$scope.payment;
			    $scope.active = false;
			    // console.log("e",e.delegateTarget);
	        };
		}

		$scope.showForm = function(e){
	        if ( e.currentTarget ='active') {
			    $scope.forma = !$scope.forma;
			    $scope.active = false;
			    // console.log("e",e.delegateTarget);
	        };
		}
});