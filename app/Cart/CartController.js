CartModule.controller('CartController', function( $rootScope,$scope,localStorageService,AlbumsFactory,CartFactory,UserAuthService ){ 
	    $scope.billing = true;

	    console.log("$rootScope",$rootScope);
	    $rootScope.$on('logged',function( event,argument ) {
	    	alert(argument);
	    	console.log("argument",argument);
	    	$scope.$on
	    })

	    $scope.total =  CartFactory.getTotal();
	    console.log("cartToPay",$scope.cart);

        $scope.cartToPay = function(){
        	var cart = CartFactory.checkOut();
        	$scope.cart = localStorageService.get('mycart');
        }

        $scope.cartToPay();

        $scope.saveOrder = function(xxx){
       		 CartFactory.saveOrder(xxx);
        }
	   

		$scope.toogleActive = function(e){
			if ( e.currentTarget ='active') {
			   $scope.billing = !$scope.billing;
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