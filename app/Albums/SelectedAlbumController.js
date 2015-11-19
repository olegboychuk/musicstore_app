AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,$routeParams ){
	var albumId = $routeParams.id;
	$scope.album = []; 
	console.log("albumId",albumId);
	var album = AlbumsFactory.getAlbumDetails( albumId );
	
//to fix if render the page we lost album!! !

	$scope.album = album;
    $scope.stock = album.album_stock;  
    $scope.price = album.album_price;
    console.log("album.album_stock",album);

	//console.log("AlbumsFactory.getAlbumDetails ( albumId )",AlbumsFactory.getAlbumDetails ( albumId ));
	
	// $scope.toogleAlbum = function ( $scope.param ){   
 //        $scope.album = AlbumsFactory.getAlbumDetails( indexAlbum );
 //        console.log( "$scope.album",$scope.album );   
 //        console.log( "indexAlbum",indexAlbum);  
 //    }

});