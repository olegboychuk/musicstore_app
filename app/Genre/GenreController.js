GenreModule.controller('GenreController', function( $log, $http, $scope, GenreFactory ){

    $scope.genres = GenreFactory.getAllGenres();
    console.log("$scope.genres",$scope.genres);

});
