GenreModule.controller('GenreController', function( $scope, GenreFactory ){

    init();

    function init() {

        $scope.genres = GenreFactory.getAllGenres();

        console.log(GenreModule.genres);

    }

	//$scope.genres=GenreFactory.getAllGenres();
	//console.log("$scope.genres",$scope.genres);
});
