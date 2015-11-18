AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,$routeParams ){
	var albumId = $routeParams.id;
	$scope.album = []; 

	console.log("albumId",albumId);
	$scope.album = AlbumsFactory.getAlbumDetails( albumId );
	// getAlbum.then( function(data){
        console.log("$scope.album",$scope.album);
	// 	$scope.album = data;
	// });
	console.log("AlbumsFactory.getAlbumDetails ( albumId )",AlbumsFactory.getAlbumDetails ( albumId ));
	
	// $scope.toogleAlbum = function ( $scope.param ){   
 //        $scope.album = AlbumsFactory.getAlbumDetails( indexAlbum );
 //        console.log( "$scope.album",$scope.album );   
 //        console.log( "indexAlbum",indexAlbum);  
 //    }

});