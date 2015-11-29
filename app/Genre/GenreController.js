GenreModule.controller('GenreController', function( $log, $http, $scope, GenreFactory ){
    $scope.genres = [];

    $scope.getGenres = function(){
    	var genres = GenreFactory.getAllGenres();
          console.log("genres",genres);
            genres.then(function(data){
                $scope.genres = data.result.genres;
                    console.log("genres11",data);
            })
            .error(function(){
               var Genres = "error in fetching data";
            });
    }
    $scope.getGenres();
});
