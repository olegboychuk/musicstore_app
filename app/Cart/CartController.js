CartModule.controller('CartController', function( $rootScope,$scope,localStorageService,AlbumsFactory,CartFactory,UserAuthService ){ 
	    $scope.billing = true;

	    // console.log("$rootScope",$rootScope);
	    // $rootScope.$on('logged',function( event,argument ) {
	    // 	alert(argument);
	    // 	console.log("argument",argument);
	    // })

		$scope.form={};

        
        $scope.cartToPay = function(){
        	$scope.cart = CartFactory.checkOut();
        }
        $scope.cartToPay();

	    $scope.total =  CartFactory.getTotal();

	    $scope.makeOrder = function( checkOut ){
	    	if(checkOut) {
               return;
            } 
            param = angular.toJson($scope.form);
            var form = $scope.form;
            console.log("paramaa",param);	

            CartFactory.makeOrder( form )
        	.then( function( responce ){
        		console.log("responceorder",responce);
        	});
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



        // $scope.saveOrder = function(xxx){
       	// 	 CartFactory.saveOrder(xxx);
        // }
	   
});