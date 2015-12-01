AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,$routeParams,CartFactory ){
	
	var albumId = $routeParams.id;
	$scope.album = null;
	$scope.inStock = false;
    $scope.quantety = "1";
    $scope.headclass = true;
    var price = 0;
	console.log(" $scope.totalPrice", $scope.totalPrice);

	$scope.loadAlbum =function(){
		var album = AlbumsFactory.getAlbumDetails( albumId );    
    	$scope.album = album; 
    	price = album.album_price;
    	$scope.totalPrice = price;
	}
	
	$scope.addToCart = function( quantety,albumId ){

	}

	$scope.addToQuantety = function(){
		if ( $scope.quantety>10 ) {
			alert("to much for one order")
		}else{
			$scope.quantety++;
			calculateIncPrice();
		}
	}

    $scope.removeFromQuantety = function(){
		if ( !$scope.quantety ) {
			return $scope.quantety = null;
		}else{
			$scope.quantety--;
			calculateRedPrice();
		}
	}

//how to create  1 function with condition where $scope.quantety the key 
	function calculateIncPrice(){
		var amount = $scope.quantety;
		console.log("amount",amount);
		$scope.totalPrice =price*amount;
		return $scope.totalPrice;
	}

	function calculateRedPrice(){
		var amount = $scope.quantety;
		$scope.totalPrice -= price;
		return $scope.totalPrice;
	}

	var intro = AlbumsFactory.getIntro();
    $scope.introduction =intro[0].intro;
	
//to fix if render the page we lost album!!!
});