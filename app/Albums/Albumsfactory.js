 
AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';
	var loadedPages = 0;
	var requestedPage = null;
	var promise = null;
    var Intro = [{ intro : "We are glad to welcome you in our store.You've made a right decision by choosen our store.Our company will give you the magic of the music world because we all have the same passion.It so amazing to fell the rhythm and good vibes to enjoy the perfect perfomance and just to be devoted fan of this magic of sound."}];
				
	/**
	*  public function getIntro
	*	return object 
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
         console.log("albumId",albumId);
        var key = "album_id";
        var index = findIndex(Albums, key, albumId);

		return Albums[index];
	}	

	AlbumsFactory.getAlbum = function(index){
		return Albums[index];
	}


    AlbumsFactory.getPriceAlbum = function(albumId){
    	
    }

    /**
	/*  function findIndex
	/*	get array of albums ,key of the object, and sting as value
	/*  return index of the array
	*/
	function findIndex(Albums, key, value) {
	
		for (var i = 0; i < Albums.length; i++) {
		 
			if (Albums[i][key] == value) {
				// console.log("i",i);
			    return i;
			}
		}
		return null;
	}


    /**
	/*  function createListAlbums
	/*  
	/*	get arrays of albums
	/*  return 
	*/
	function createListAlbums( stockAlbums ){
		
		var i = 0;
		for ( i = i;i<stockAlbums.length; i++) {
			Albums.push( stockAlbums[i] ); 
		};
		console.log("Albumslist",Albums);
		return Albums;
	}

    /**
	/*  function getNextPage
	/*  get json object from ajax and create list of Albums
	/* 
	/*	get json object from ajax
	/*  return deffer promise
	*/
	AlbumsFactory.getNextPage = function (){
			
	    if( requestedPage !== null){
            return promise;
		}

    	//deferred = $q.defer();
		requestedPage = loadedPages;

		return promise = $http.get( urlBase +'/:'+ requestedPage )
		.then( function( data ) {	   	 
		 
	        loadedPages+=data.data.result.albums.length;
            
		    createListAlbums( data.data.result.albums );
		   	requestedPage = null;
            return Albums;

	   	}, function(msg, code) {
			    $log.error(msg, code);
			    return msg;
		});

        //return deferred.promise;
	}


	AlbumsFactory.getAlbums = function (){
	    return Albums;
	};

    // AlbumsFactory.pushAlbums = function(albums){

    // }


	return AlbumsFactory;
});
