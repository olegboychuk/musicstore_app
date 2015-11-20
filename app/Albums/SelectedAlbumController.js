AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,$routeParams ){
	
	var albumId = $routeParams.id;
	$scope.album = []; 
	$scope.noStock = false;
    $scope.yesStock = false;
	$scope.deleted =false;

	$scope.loadAlbum =function(){
		var album = AlbumsFactory.getAlbumDetails( albumId );

		$scope.album = album;
	    // $scope.stock = album.album_stock;  
	    $scope.price = album.album_price;
	}
	$scope.loadAlbum();
	
	var intro = AlbumsFactory.getIntro();
    $scope.introduction =intro[0].intro;

    //  $scope.checkStock = function(){
    // 	if ( album.album_stock > 0 ){
    // 		console.log("$scope.stock",$scope.stock);
    // 		$scope.deleted=true;
    // 	}
    // }
	
    //console.log("$scope.checkStock()",checkStock());
//to fix if render the page we lost album!! !




	//console.log("AlbumsFactory.getAlbumDetails ( albumId )",AlbumsFactory.getAlbumDetails ( albumId ));
	
	// $scope.toogleAlbum = function ( $scope.param ){   
 //        $scope.album = AlbumsFactory.getAlbumDetails( indexAlbum );
 //        console.log( "$scope.album",$scope.album );   
 //        console.log( "indexAlbum",indexAlbum);  
 //    }

});