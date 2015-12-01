AlbumsModule.controller( 'AlbumsGenreController',function($scope,$routeParams,GenreFactory,AlbumsGenreFactory) {
	var genreId = $routeParams.id;

	console.log("genreId",$routeParams.id);
	$scope.albums = [];
	$scope.genreName = " ";

	$scope.loadAlbumsGenre = function( genreId ){
		var albums = AlbumsGenreFactory.getAlbumsGenre( genreId ); 
		albums.then( function( data ) {
			$scope.albums = data.albums;
			$scope.genreLength = data.albums.length;
			console.log("$scope.genreName",data.albums);
			//$scope.albums.splice( $scope.albums.length, data.albums.length, data.albums );
		});
	}
	$scope.loadAlbumsGenre(genreId);
	// $scope.loadAlbumsName = function ( genreId ){


	// };



})