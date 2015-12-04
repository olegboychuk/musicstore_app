 
AlbumsModule.factory( 'AlbumsGenreFactory',function( $log,$http,$q,AlbumsFactory ){
	var AlbumsGenreFactory = {};
	var deferred = null;
	albumsge = [];

	AlbumsGenreFactory.getAlbumsGenre = function( genreId ){
		deferred = $q.defer();
	    	console.log("genreId",genreId);
	    $http.get('api/genre-albums'+'/:'+ genreId)
	    .success( function( data ) {
	    	console.log("data",data);
			deferred.resolve({
			   albums: data.result.albums 
			});
			albumsge.push(data.result.albums);
	        AlbumsFactory.pushAlbums(albumsge);
			 //albumsge.push(data.result.albums);
			console.log("albumsge",albumsge);
		})
		.error(function(){
               var albums = "error in fetching data";
         });
		return deferred.promise;
	}

	return AlbumsGenreFactory
});