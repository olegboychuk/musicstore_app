
AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	//var promise = getAlbums(1);
	var urlBase = 'api/albums';
	var loadedPages = 0;
	var requestedPage = null;
	var deferred = null;

	AlbumsFactory.getAlbumDetails = function( albumIndex ){		
		return Albums[albumIndex];
	};

    // AlbumsFactory.promiseAlbums = function(){
	//  	return $http.get( urlBase );
	// };


	AlbumsFactory.getAlbums = function (){
		var promise = deferred.promise;
		// console.log("promise",promise);
		// promise.then(
		//     function( payload ) {
		//     	console.log("payload",payload);
		//         Albums = payload;
		//     },
		//     function(errorPayload) {
		// 	   $log.error('failure loading albums', errorPayload);
		// 	}
		// )
		// 	  	console.log("promiseAlbums",Albums);
		
	    return promise;
	};

	AlbumsFactory.getNext = function (){
		if( requestedPage !== null){
            return deferred.promise;
		}

    	deferred = $q.defer();
		requestedPage = loadedPages;
				console.log( "requestedPage",requestedPage);
		$http.get( urlBase +'/:'+ requestedPage )

		    .success( function( data ) {	        
		        requestedPage = null;
		        loadedPages++;
		        console.log("loadedPages",loadedPages);
		        deferred.resolve({
			       // album: data.result.albums[0].album_price,
			        albums: data.result.albums 
			    })
			     Albums.splice( requestedPage, data.result.albums.length ,data.result.albums );
			    console.log("data.result.albums",data.result.albums);
			    console.log("startAlbums",Albums);
		    })
			.error( function(msg, code) {
			    deferred.reject(msg);
			    $log.error(msg, code);
			})
			console.log("deferred.promise",deferred.promise);
            return deferred.promise;
	}

	AlbumsFactory.getNext();

	// function getAlbums(){
	// 	connectToAlbums()

	// 	.success(function(albums){
	// 		Albums = albums;
	// 		console.log("Albums",Albums);
	// 	});
	// }
	// getAlbums();

	console.log("AlbumsFactory",AlbumsFactory);
	

	return AlbumsFactory;
});
