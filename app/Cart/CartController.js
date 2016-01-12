CartModule.controller('CartController', function( $rootScope,$scope,localStorageService,AlbumsFactory,CartFactory,UserAuthService ){ 
	    $scope.billing = true;
		$scope.form={};

	    $rootScope.$on('statusLogin',function(event,data){
			console.log("logdata",data);
			alert("kuku");
	    });

        $scope.cartToPay = function(){
        	$scope.cart = CartFactory.checkOut();
        }
        $scope.cartToPay();

	    $scope.total = CartFactory.getTotal();

	    $scope.makeOrder = function( checkOut ){
	    	if(checkOut) {
               return;
            } 
            param = angular.toJson($scope.form);
            var form = $scope.form;

            CartFactory.makeOrder( form )
        	.then( function( responce ){
        		console.log("responceorder",responce.msg);
        		 if ( responce) {
        		 	$scope.responceOrder = responce.msg;
        		 };    		
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

});