GenreModule.factory( 'GenreFactory',function( $http ){
    var urlBase = 'api/genre';
    var GenreFactory = {};
    var genres = ['Alternative', 'Blues', 'Box sets', 'Classical', 'Country', 'Dance', 'Heavy metal', 'Jazz', 'Rock-pop'];

    function addGenre( genreIndex ){
        genres.push( genreIndex )
    };

    function removeGenre( genreIndex ){
        genres.splice( genres.indexOf( genreIndex ), 1 );
    };

    GenreFactory.insertGenre = function( genreIndex ) {
        addGenre( genreIndex );
    };

    GenreFactory.deleteGenre = function( genreIndex ) {
        removeGenre( genreIndex );
    };

    GenreFactory.getAllGenres = function() {
        return genres;
    };


    return GenreFactory;

});

