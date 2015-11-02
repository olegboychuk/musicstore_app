
AlbumsModule.controller( 'AlbumController',function( $log,$http,$scope,AlbumsFactory ){
	
	$scope.albums = [];
	console.log( "cAlbumsFactory.getAlbums",AlbumsFactory.getAlbums() );
	
	var getAlbums = AlbumsFactory.getAlbums();
	  getAlbums.then(function(data){
	  	console.log("albums",data);
	  	$scope.albums = data.albums;
	  	console.log("$scope.albums",$scope.albums);
	  });
     
	// var promise =  AlbumsFactory.getNext( 2 );
	// promise.then(
	//     function( payload ) {
	//     	console.log("payload",payload);
	//         $scope.albums = payload;
	//         console.log("$scope.albums",$scope.albums);
	//     },
	//     function(errorPayload) {
	// 	   $log.error('failure loading albums', errorPayload);
	// 	}
	// );

});