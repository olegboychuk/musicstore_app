
AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';
	var loadedPages = 0;
	var requestedPage = null;
	var deferred = null;
 
	AlbumsFactory.getAlbumDetails = function( albumIndex ){		
        console.log("Albums3",Albums);
		return Albums.indexOf(Albums.albumIndex);
	};	

	function createListAlbums( stockAlbums ){
		console.log("stockAlbums",stockAlbums.length);
		var i = 0;
		for ( i = i;i<=stockAlbums.length; i++) {
			Albums.push( stockAlbums[i] ); 
		};
        console.log( "Albumsss",Albums );
		return Albums;
	}

	AlbumsFactory.getNextPage = function (){
			
	    if( requestedPage !== null){
            return deferred.promise;
		}

    	deferred = $q.defer();
		requestedPage = loadedPages;
        console.log("requestedPage",requestedPage);  
		$http.get( urlBase +'/:'+ requestedPage )
		.success( function( data ) {	   	 

	        loadedPages+=data.result.albums.length;
	        console.log("loadedPages",loadedPages);  
            
            deferred.resolve({
		        albums: data.result.albums 
		    })

		    createListAlbums( data.result.albums );
		   	requestedPage = null;	    
	   	})
	   	.error( function(msg, code) {
			    deferred.reject(msg);
			    $log.error(msg, code);
		});

        return deferred.promise;
	}
     
	// AlbumsFactory.getAlbums = function (){
	// 	var getAlbums = deferred.promise;
	// 	console.log("getAlbums",getAlbums);
	//     return getAlbums;
	// };

	AlbumsFactory.getAlbums = function (){
		 console.log("getAlbums",Albums);
	    return Albums;
	};

	return AlbumsFactory;

});
