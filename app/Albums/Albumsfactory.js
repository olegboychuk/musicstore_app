
AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';
	var loadedPages = 0;
	var requestedPage = null;
	var deferred = null;
    var Intro = [{ intro : "We are glad to welcome you in our store.You've made a right decision by choosen our store.Our company will give you the magic of the music world because we all have the same passion.It so amazing to fell the rhythm and good vibes to enjoy the perfect perfomance and just to be devoted fan of this magic of sound."}];
				
	/**
	/*  public function getIntro
	/*	return object 
	*/
	AlbumsFactory.getIntro = function(){
		return Intro;
	};	

    /**
	/*  public function getAlbumDetails
	/*	get album id 
	/*  return album from array of albums 
	*/
	AlbumsFactory.getAlbumDetails = function( albumId ){		
        var key = "album_id";
        var index = findIndex(Albums, key, albumId);
		return Albums[index];
	};	

    /**
	/*  function findIndex
	/*	get array of albums ,key of the object, and sting as value
	/*  return index of the array
	*/
	function findIndex(Albums, key, value) {

		for (var i = 0; i < Albums.length; i++) {
		 
			if (Albums[i][key] == value) {
				console.log("i",i);
			    return i;
			}
		}
		return null;
	}

    /**
	/*  function createListAlbums
	/*  
	/*	get 
	/*  return 
	*/
	function createListAlbums( stockAlbums ){
		console.log("stockAlbums",stockAlbums.length);
	
		var i = 0;
		for ( i = i;i<=stockAlbums.length; i++) {
			Albums.push( stockAlbums[i] ); 
		};
        console.log( "Albumsss",Albums );
		return Albums;
	}

    /**
	/*  function createListAlbums
	/*  
	/*	get 
	/*  return 
	*/
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
