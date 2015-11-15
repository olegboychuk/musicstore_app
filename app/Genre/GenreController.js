GenreModule.controller('GenreController', function( $log, $http, $scope, GenreFactory ){
    $scope.genres = [];

    $scope.getGenres = function(){
        console.log("GenreFactory.getAllGenres()",GenreFactory.getAllGenres());
    	var genres = GenreFactory.getAllGenres();
            genres.success(function(data){
                $scope.genres = data.result.genres;
                console.log("getAllGenresSuccess",$scope.genres);
            })
            .error(function(){
               var Genres = "error in fetching data";
            });
    }
    $scope.getGenres();
});
