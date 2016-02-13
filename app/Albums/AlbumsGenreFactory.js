 
AlbumsModule.factory( 'AlbumsGenreFactory',function( $log,$http,$q,AlbumsFactory ){
	var AlbumsGenreFactory = {};
	var deferred = null;
	albumsge = [];

	AlbumsGenreFactory.getAlbumsGenre = function( genreId ){
		deferred = $q.defer();
	
	    $http.get('api/genre-albums'+'/:'+ genreId)
	    .success( function( data ) {
	    	console.log("genrealbum",data);
			deferred.resolve( { albums: data.result.albums } );
			albumsge.push( data.result.albums );
		})
		.error( function(){
               var albums = "error in fetching data";
        });
		return deferred.promise;
	}
	return AlbumsGenreFactory
});