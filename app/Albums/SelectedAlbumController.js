AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,$routeParams ){
	
	var albumId = $routeParams.id;
	$scope.album = null;
	$scope.inStock = false;

	$scope.loadAlbum =function(){
		var album = AlbumsFactory.getAlbumDetails( albumId );    
	    // if ( album.album_stock > 0 ){
    	// 	$scope.inStock = true;
    	// }else{
    	// 	$scope.outStock = true;
    	// }
    	$scope.album = album; 
	}
	
	var intro = AlbumsFactory.getIntro();
    $scope.introduction =intro[0].intro;
	
//to fix if render the page we lost album!!!
});