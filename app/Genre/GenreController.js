GenreModule.controller('GenreController', function( $scope, GenreFactory ){

    $scope.genres = GenreFactory.getAllGenres();
    console.log("$scope.genres",$scope.genres);
   


    // function init() {

    //     $scope.genres = GenreFactory.getAllGenres();

    //     console.log(GenreModule.genres);

    // }
    // init();
});
