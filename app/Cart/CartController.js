CartModule.controller('CartController', function( $rootScope,$scope,localStorageService,AlbumsFactory,CartFactory,UserAuthService ){ 
	    $scope.billing = true;

	    // console.log("$rootScope",$rootScope);
	    // $rootScope.$on('logged',function( event,argument ) {
	    // 	alert(argument);
	    // 	console.log("argument",argument);
	    // })

		$scope.form={};

	    $scope.total =  CartFactory.getTotal();
	    console.log("cartToPay",$scope.cart);

	    $scope.makeOrder = function( checkOut ){
	    	console.log("checkOut",checkOut);
	    	if(checkOut) {
               return;
            } 
            //$scope.submitted = true;
            param = angular.toJson($scope.form);
            var form = $scope.form;
            console.log("param",param);	

            CartFactory.makeOrder( form )
        	.then( function( responce ){
        		console.log("responceorder",responce);
        	});
	    }

	    $scope.cart = localStorageService.get('mycart');
	    console.log("$scope.cart",$scope.cart);
        // $scope.cartToPay = function(){
        // 	var cart = CartFactory.checkOut();
        // 	$scope.cart = localStorageService.get('mycart');
        // 	console.log("$scope.cart",$scope.cart);
        // }

        //$scope.cartToPay();


        $scope.saveOrder = function(xxx){
       		 CartFactory.saveOrder(xxx);
        }
	   

		$scope.toogleActive = function(e){
			 console.log("e",e);
			if ( e.currentTarget ='active') {
			   $scope.billing = !$scope.billing;
	        };
		}
		
		$scope.showPayment = function(e){
	        if ( e.currentTarget ='active') {
			    $scope.payment = !$scope.payment;
			    $scope.active = false;
			    
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