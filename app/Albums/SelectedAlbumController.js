AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,$routeParams,CartFactory ){
	
	var albumId = $routeParams.id;
	$scope.album = null;
	$scope.inStock = false;
    $scope.quantety = "1";
    $scope.totalPrice = " ";

    $scope.headclass = true;
    var price = 0;

	$scope.loadAlbum =function(){
		var album = AlbumsFactory.getAlbumDetails( albumId );    
    	$scope.album = album; 
	}
	
	$scope.addToCart = function( que ){

	}

	$scope.addToQuantety = function(){
		if ( $scope.quantety>10 ) {
			alert("to much for one order")
		}else{
			$scope.quantety++;
		}
	}

    $scope.removeFromQuantety = function(){
		if ( !$scope.quantety ) {
			return $scope.quantety = null;
		}else{
			$scope.quantety--;
		}
	}

	function calculatePrice(){
		$scope.totalPrice= $scope.quantety.length
		
	}

	$scope.totalPrice = function(){
		$scope.quantety.length
	}

	var intro = AlbumsFactory.getIntro();
    $scope.introduction =intro[0].intro;
	
//to fix if render the page we lost album!!!
});