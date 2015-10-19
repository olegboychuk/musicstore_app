GenreModule.factory( 'GenreList',function( $http ){
    var urlBase = 'api/genre';
    var GenreList = {};
    var genres = ['Alternative', 'Blues', 'Box sets', 'Classical', 'Country', 'Dance', 'Heavy metal', 'Jazz', 'Rock-pop'];

    function addGenre( genreIndex ){
        genres.push( genreIndex )
    };

    function removeGenre( genreIndex ){
        genres.splice( genres.indexOf( genreIndex ), 1 );
    };

    GenreList.insertGenre = function( genreIndex ) {
        addGenre( genreIndex );
    };

    GenreList.deleteGenre = function( genreIndex ) {
        removeGenre( genreIndex );
    };

    GenreList.getAllGenres = function() {
        return genres;
    };


    return GenreList;

});

