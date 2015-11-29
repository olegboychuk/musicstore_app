AlbumsModule.controller( 'AlbumsGenreController',function($scope,$routeParams,GenreFactory,AlbumsGenreFactory) {
	var genreId = $routeParams.id;
	$scope.albums = [];
	
	$scope.loadAlbumsGenre = function( genreId ){
		var albums = AlbumsGenreFactory.getAlbumsGenre( genreId ); 
		console.log("albums",albums);
		albums.then( function( data ) {
			console.log("data.albums",data.albums );
			$scope.albums = data.albums;
			//$scope.albums.splice( $scope.albums.length, data.albums.length, data.albums );
			console.log("$scope.albums",$scope.albums);
		})
	}
	$scope.loadAlbumsGenre( genreId );

})