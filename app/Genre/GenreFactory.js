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
       return $http.get(urlBase);
    };

    return GenreFactory;

});

