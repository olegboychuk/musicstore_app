AlbumsModule.controller( 'AlbumsGenreController',function($scope,$routeParams,GenreFactory,AlbumsGenreFactory) {
	var genreId = $routeParams.id;
	$scope.albums = [];
	
	$scope.loadAlbumsGenre = function( genreId ){
		var albums = AlbumsGenreFactory.getAlbumsGenre( genreId ); 
		albums.then( function( data ) {
			$scope.albums = data.albums;
			//$scope.albums.splice( $scope.albums.length, data.albums.length, data.albums );
		})
	}
	$scope.loadAlbumsGenre( genreId );

})