
AlbumsModule.controller( 'AlbumController',function( $scope,AlbumsFactory ){
	
	$scope.albums = [];
    AlbumsFactory.promiseAlbums( 4 )
	.success( function( responce ){
		$scope.albums = albums;
		console.log("$scope.albums",$scope.albums);
	});

});