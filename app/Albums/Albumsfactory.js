
AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';
	var loadedPages = 0;
	var requestedPage = null;
	var deferred = null;

	AlbumsFactory.getAlbumDetails = function( albumIndex ){		
		

		return Albums[albumIndex];
	};

	// AlbumsFactory.getNextAlbums = function(){		
	// 	var promise = deferred.promise;
	// 	promise.then( function( data ){
	// 	  	Albums = data.albums;
	// 	  	console.log(" Albums22",Albums);			
 //  	   		console.log(" Albums22",Albums);
 //  	    return Albums;	
 //  	    });	
	// } 

	AlbumsFactory.getAlbums = function (){
		var promise = deferred.promise;
	    return promise;
	};

	AlbumsFactory.getNextPage = function (  ){
		console.log("requestedPage",requestedPage);
		if( requestedPage !== null){
            return deferred.promise;
		}

    	deferred = $q.defer();
		requestedPage = loadedPages;

		$http.get( urlBase +'/:'+ requestedPage )
		    .success( function( data ) {

		        requestedPage = null;
		        loadedPages++;

		        deferred.resolve({
			        albums: data.result.albums 
			    })
			  //  Albums.splice( requestedPage, data.result.albums.length ,data.result.albums );	
		    })
			.error( function(msg, code) {
			    deferred.reject(msg);
			    $log.error(msg, code);
			})
        return deferred.promise;
	}

	AlbumsFactory.getNextPage();
	
	return AlbumsFactory;
});
