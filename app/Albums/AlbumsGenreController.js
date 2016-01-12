AlbumsModule.controller( 'AlbumsGenreController',function( $scope,$stateParams,GenreFactory,AlbumsGenreFactory,CartFactory ) {
		
	var genreId = $stateParams.genreId;
    var genreName = $stateParams.genreName;
	var product = '1';
	$scope.albums = [];
	$scope.genreName = genreName;
	$scope.genreId = genreId;

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