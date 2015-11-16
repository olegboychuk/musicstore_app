AlbumsModule.controller('SelectedAlbumController',function( $scope,AlbumsFactory,AlbumsController,$routeParams ){
	$scope.param = $routeParams.id;
	$scope.album = []; 

	console.log("$scope.param",$scope.param);
	var album = AlbumsFactory.getAlbumDetails ( $scope.param );
	console.log("album9999",album);
	
	// $scope.toogleAlbum = function ( $scope.param ){   
 //        $scope.album = AlbumsFactory.getAlbumDetails( indexAlbum );
 //        console.log( "$scope.album",$scope.album );   
 //        console.log( "indexAlbum",indexAlbum);  
 //    }

});