 
AlbumsModule.factory( 'AlbumsGenreFactory',function( $log,$http,$q ){
	var AlbumsGenreFactory = {};
	var deferred = null;
	var genrealbums =[];

	AlbumsGenreFactory.getAlbumsGenre = function( genreId ){
		deferred = $q.defer();
	    
	    $http.get('api/genre-albums'+'/:'+ genreId)
	    .success( function( data ) {
	    	
		    genrealbums = data.result.albums;
			deferred.resolve({
			   albums: data.result.albums 
			});
		})
		.error(function(){
               var albums = "error in fetching data";
         });
		return deferred.promise;
	}

	return AlbumsGenreFactory
});