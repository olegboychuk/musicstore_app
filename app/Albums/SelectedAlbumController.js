AlbumsModule.controller('SelectedAlbumController',function( $scope,$routeParams,AlbumsFactory,CartFactory ){
	
	var albumId = $routeParams.id;
	$scope.album = null;
	$scope.inStock = false;
    $scope.quantety = "1";
    $scope.headclass = true;
    var price = 0;

	$scope.loadAlbum =function(){
		var album = AlbumsFactory.getAlbumDetails( albumId );    	
    	// console.log("pr",album);
    	price = album.album_price;
    	$scope.totalPrice = album.album_price;
    	$scope.album = album; 
	}
	// $scope.loadAlbum();
	$scope.addToCart = function(quantety){
		var cart= CartFactory.addToCart(quantety,albumId);
		
		$scope.quantety = "1";
		$scope.totalPrice = $scope.totalPrice/quantety;
		console.log("quantety",cart);
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