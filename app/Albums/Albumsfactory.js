AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';
	var deferred = $q.defer();
	// AlbumsFactory.getAlbums = function(){
	// 	return Albums;
	// };
	var promise = getAlbums(1);
	AlbumsFactory.getAlbumDetails = function( albumIndex ){		
		return Albums[albumIndex];
	};

 //    AlbumsFactory.promiseAlbums = function(){
	//  	return $http.get( urlBase );
	// };

	// AlbumsFactory.getAlbums = function(){
	// 	return Albums;
	// }
	
	AlbumsFactory.getPrice = function( albumIndex ){		
		promise.then(
		    function( album ) {	    	
		       console.log("album",album);
		        Album.price = album.albums[albumIndex].album_price
		       
		        console.log("Album.price",Album.price);
		    },
		    function(errorPayload) {
			   $log.error('failure loading albums', errorPayload);
			}
		);
		return Albums.price;
	};

	function connectToAlbums(){
		return $http.get( urlBase );
	};

	function getAll(){
		connectToAlbums()
		.success(function(albums){
			Albums = albums;
			console.log("Albums",Albums);
		});
	}

	// AlbumsFactory.getAlbums = function ( start ){
	function getAlbums( start ){
		$http.get( urlBase +'/:'+ start )
		    .success( function( data ) {	        
		        deferred.resolve({
			       // album: data.result.albums[0].album_price,
			        albums: data.result.albums
			    })
			    Albums = data.result.albums;
			    console.log("startAlbums",Albums);
		    })
			.error( function(msg, code) {
			    deferred.reject(msg);
			    $log.error(msg, code);
			})
			console.log("deferred.promise",deferred.promise);
            return deferred.promise;
	}
	getAlbums(2);

	// function getAlbums( start ){
	// 	var deferred = $q.defer();
	// 	if( !start ){
	// 		connectToAlbums();
	// 	    getAll();
	// 	}else{
	// 		$http.get( urlBase +'/:'+ start )
	// 		    .success( function( data ) {	        
	// 		        deferred.resolve({
	// 			        album: data.result.albums[0].album_price,
	// 			        albums: data.result.albums
	// 			    })
	// 			    Albums = data.result.albums;
	// 			    console.log("startAlbums",Albums);
	// 		    })
	// 			.error( function(msg, code) {
	// 			    deferred.reject(msg);
	// 			    $log.error(msg, code);
	// 			})
	// 			console.log("deferred.promise",deferred.promise);
	//        return deferred.promise;
	//     }
	// };

	return AlbumsFactory;
});