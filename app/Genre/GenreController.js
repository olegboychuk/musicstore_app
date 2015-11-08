GenreModule.controller('GenreController', function( $log, $http, $scope, GenreFactory ){
    $scope.genres = GenreFactory.getAllGenres();

    // $scope.getGenres = function(){
    // 	GenreFactory.getAllGenres()
    // 	 .success(function(data){
    //             console.log("getAllGenresSuccess0",data);
    //             $scope.Genres = data;
    //             console.log("getAllGenresSuccess1",Genres);
    //         })
    //         .error(function(){
    //             Genres = "error in fetching data";
    //         });
    // }
    
    console.log("$scope.genres",$scope.genres);

});
