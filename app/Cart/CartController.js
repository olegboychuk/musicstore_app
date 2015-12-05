CartModule.controller('CartController',["$scope", function( $scope  ){ 
	 $scope.billing = true;
	// $scope.payment = false;
	// $scope.forma = false;
	//$scope.active = "false"

	$scope.toogleActive = function(e){
		if ( e.currentTarget ='active') {
		   $scope.billing = !$scope.billing;
		    console.log("e",e.delegateTarget);
        };
  //       if ( $scope.active ) {
		// 	$scope.active = false;
		// 	$scope.billing = !$scope.billing;
		// }else{
		// 	$scope.active = true;
		// 	$scope.billing = true;
		// }	
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


}]);