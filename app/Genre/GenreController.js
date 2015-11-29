GenreModule.controller('GenreController', function( $log, $http, $scope, GenreFactory ){
    $scope.genres = [];

    $scope.getGenres = function(){
    	var genres = GenreFactory.getAllGenres();
            genres.success(function(data){
                $scope.genres = data.result.genres;
            }),
            function(error){
               var Genres = "error in fetching data";
            };
    };
    $scope.getGenres();
});
