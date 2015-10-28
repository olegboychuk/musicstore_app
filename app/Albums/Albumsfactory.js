AlbumsModule.factory( 'AlbumsFactory',function( $http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';

	// AlbumsFactory.getAlbums = function(){
	// 	return Albums;
	// };

	AlbumsFactory.getAlbumDetails = function( albumIndex ){
		return Albums[albumIndex];
	};

    AlbumsFactory.promiseAlbums = function(){
	 	return $http.get( urlBase );
	};

	AlbumsFactory.getPrice = function( albumIndex ){
		return Albums[albumIndex].price;
	}
	


 AlbumsFactory.getAlbums = function( start){
 	// console.log("start",start);
	var deferred = $q.defer();
	if(!start){
		connectToAlbums();
	    getAlbums();
	}else{
	  $http.get( urlBase +'/:'+ start+'/' )
	    .success( function( data ) {
	        deferred.resolve({
		        title: data.title,
		        cost: data.price
		    })
	    })
		.error( function(msg, code) {
		    deferred.reject(msg);
		    $log.error(msg, code);
		});
	}	
return deferred.promise;
}



	function connectToAlbums(){
		return $http.get( urlBase );
	};

	function getAlbums(){
		connectToAlbums()
		.success(function(albums){
			Albums = albums;
			console.log("Albums",Albums);
		});
	}
	// getAlbums();
	console.log("AlbumsFactory",AlbumsFactory);
	
	return AlbumsFactory;
});