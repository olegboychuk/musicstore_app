AlbumsModule.controller( 'AlbumsGenreController',function($scope,$routeParams,GenreFactory,AlbumsGenreFactory,CartFactory) {
	var genreId = $routeParams.id;
	var product = '1';
	$scope.albums = [];
	$scope.genreName = " ";

	$scope.loadAlbumsGenre = function( genreId ){
		var albums = AlbumsGenreFactory.getAlbumsGenre( genreId ); 
		albums.then( function( data ) {
			$scope.albums = data.albums;
			$scope.genreLength = data.albums.length;
			
			//$scope.albums.splice( $scope.albums.length, data.albums.length, data.albums );
		});
	}

	 $scope.addToCart = function( albumId ){
	    
	    CartFactory.addToCart(product,albumId);
    } 

	$scope.loadAlbumsGenre(genreId);

})