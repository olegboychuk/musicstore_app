GenreModule.factory( 'GenreFactory',  function(  $http ){
    var urlBase = 'api/genres';
    var GenreFactory = {};
   // var genres = ['Alternative', 'Blues', 'Box sets', 'Classical', 'Country', 'Dance', 'Heavy metal', 'Jazz', 'Rock-pop'];
    var Genres = [];

    function addGenre( genreIndex ){
        genres.push( genreIndex )
    }

    function removeGenre( genreIndex ){
        genres.splice( genres.indexOf( genreIndex ), 1 );
    }

    GenreFactory.insertGenre = function( genreIndex ) {
        addGenre( genreIndex );
    };

    GenreFactory.deleteGenre = function( genreIndex ) {
        removeGenre( genreIndex );
    };

      GenreFactory.getAllGenres = function() {
        $http.get(urlBase)
            .success(function(data){
                Genres = data.result.genres;
                console.log("getAllGenresSuccess",Genres);
            })
            .error(function(){
                Genres = "error in fetching data";
            });

        console.log("genres",Genres);
        return Genres;
    };

    // GenreFactory.getAllGenres = function() {
    //     $http.get("application/core/Model/GenresModel.php")
    //         .success(function(data){
    //             console.log("getAllGenresSuccess",Genres);
    //             Genres = data;
    //             console.log("getAllGenresSuccess",Genres);
    //         })
    //         .error(function(){
    //             Genres = "error in fetching data";
    //         });

    //     console.log("genres",Genres);
    //     return Genres;
    // };


    return GenreFactory;

});

