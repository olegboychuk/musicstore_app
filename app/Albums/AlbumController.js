
AlbumsModule.controller( 'AlbumController',function( $log,$http,$scope,AlbumsFactory ){
	
	$scope.albums = [];
    
 //    AlbumsFactory.promiseAlbums( 4 )
	// .success( function( responce ){
	// 	$scope.albums = albums;
	// 	console.log("$scope.albums",$scope.albums);
	// });
	

	// var promise = AlbumsFactory.getAlbums(10);
 //     promise.then(
 //        function(payload) {
 //            $scope.albums = payload.data;
 //            console.log("$scope.albums",$scope.albums);
 //        },
 //        function(errorPayload) {
	// 	   $log.error('failure loading movie', errorPayload);
	// 	});
	//  });

});