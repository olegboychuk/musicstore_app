 
AlbumsModule.factory( 'AlbumsGenreFactory',function( $log,$http,$q ){
	var AlbumsGenreFactory = {};
	var deferred = null;
	var genrealbums =[];

	AlbumsGenreFactory.getAlbumsGenre = function( genreId ){
		console.log("genreId",genreId);
		deferred = $q.defer();
	    
	    $http.get('api/genre-albums'+'/:'+ genreId)
	    .success( function( data ) {
		    genrealbums = data.result.albums;
			console.log("data",genrealbums);
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