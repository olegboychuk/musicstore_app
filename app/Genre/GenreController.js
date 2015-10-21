GenreModule.controller('GenreController', function( $scope, GenreFactory,){
	$scope.genres=GenreFactory.getAllGenres();
	console.log("$scope.genres",$scope.genres);
});
