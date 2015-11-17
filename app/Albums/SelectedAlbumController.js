AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,AlbumsController,$routeParams ){
	var albumId = $routeParams.id;
	$scope.album = []; 

	console.log("albumId",albumId);
	$scope.album = AlbumsFactory.getAlbumDetails ( albumId );
	console.log("album9999",album);
	
	// $scope.toogleAlbum = function ( $scope.param ){   
 //        $scope.album = AlbumsFactory.getAlbumDetails( indexAlbum );
 //        console.log( "$scope.album",$scope.album );   
 //        console.log( "indexAlbum",indexAlbum);  
 //    }

});