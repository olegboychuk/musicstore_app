
AlbumsModule.factory( 'AlbumsFactory',function( $log,$http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';
	// var urlAlbum ='api/album';
	var loadedPages = 0;
	var requestedPage = null;
	var deferred = null;

	AlbumsFactory.getAlbumDetails = function( albumIndex ){		
        console.log("Albums1",Albums);
		return Albums[albumIndex];
	};	

	AlbumsFactory.getNextPage = function (){
			
	    if( requestedPage !== null){
            return deferred.promise;
		}

    	deferred = $q.defer();
		requestedPage = loadedPages;
		console.log("requestedPage",requestedPage);

		$http.get( urlBase +'/:'+ requestedPage )
		.success( function( data ) {

			Albums.splice( requestedPage, data.result.albums.length ,data.result.albums );		    
		   	console.log("Albums.splice",Albums);
	       
	        loadedPages++;
	        console.log("loadedPages",loadedPages);  
            
            deferred.resolve({
		        albums: data.result.albums 
		    })
		    console.log("albums1111",data.result.albums);
		   	 
		   	requestedPage = null;
		    // for(var i = 0; i<loadedPages; i++) {	
	     //       // alert("123");
	     //       console.log("loadedPages5",loadedPages);
	     //       console.log("requestedPage",requestedPage);
	     //     //  Albums.push(data.result.albums[i]);
		    //     Albums.splice( requestedPage, data.result.albums.length ,data.result.albums[i] );		    
	    	// }
	   	})
	   	.error( function(msg, code) {
			    deferred.reject(msg);
			    $log.error(msg, code);
		});

        return deferred.promise;

	}
     
	AlbumsFactory.getAlbums = function (){
		var getAlbums = deferred.promise;
		console.log("getAlbums",getAlbums);
	    return getAlbums;
	};

    AlbumsFactory.getNextPage();

	return AlbumsFactory;



	// AlbumsFactory.getNextPage = function (){

	// 	// if( requestedPage !== null){
 //  //           return deferred.promise;
	// 	// }

 //    	// deferred = $q.defer();
	// 	requestedPage += loadedPages;
	// 	console.log("requestedPage",requestedPage);

	// 	$http.get( urlBase +'/:'+ requestedPage )
	// 	    .success( function( data ) {
	// 	    	alert("3");
	// 	    	console.log("data",data.result.albums);
	// 	        //requestedPage = null;
	// 	        loadedPages+=data.result.albums.length;
	// 	        console.log("loadedPages5",loadedPages);
		       
	// 	     //    deferred.resolve({
	// 		    //     albums: data.result.albums 
	// 		    // })
	// 	        console.log("albums",data.result.albums.length);

	// 		    for(var i = requestedPage; i<loadedPages; i++) {	
 //                   // alert("123");
 //                   console.log("loadedPages5",loadedPages);
 //                   console.log("requestedPage",requestedPage);
 //                   // Albums.push(data.result.albums[i]);
	// 		        Albums.splice( requestedPage, data.result.albums.length ,data.result.albums[i] );		    
	// 	    	}

	// 	    })
	// 		// .error( function(msg, code) {
			//     deferred.reject(msg);
			//     $log.error(msg, code);
			// })
			// console.log("Albums",Albums); 
			// return Albums;
       // return deferred.promise;
	// }

	// AlbumsFactory.getNextPage();




	// AlbumsFactory.getAlbums = function(){	
	//     AlbumsFactory.getNextPage();
	// 	var promise = deferred.promise;
	// 	promise.then( function( data ){
	// 	  	Albums = data.albums;
	// 	  	console.log(" Albums22",Albums);
		  				  
 //  	   });
 //  	   return promise;				
	// } 

	
	// AlbumsFactory.getAlbums = function (){
	//  	var promise = AlbumsFactory.getNextPage()
	//     promise.then( function( data ){
	//     	console.log( "data",data );
	// 	  	//Albums.splice(  data.albums.length ,data.albums );	
	// 	  	//console.log(" Albums222",Albums);
	// 	  	return data;
	// 	});	
	// 	console.log("promise111",promise);	
 //  	    return promise;
	// };



// AlbumsFactory.getNextPage = function (requestedPage ){
// 		console.log("loadedPages",loadedPages);
// 		console.log("requestedPage",requestedPage);
// 		// if( requestedPage !== null){
//   //           return deferred.promise;
// 		// }

//     	deferred = $q.defer();
// 		//requestedPage = loadedPages;

// 		$http.get( urlBase +'/:'+ requestedPage )
// 		    .success( function( data ) {

// 		        requestedPage = null;
// 		        loadedPages++;

// 		        deferred.resolve({
// 			        albums: data.result.albums 
// 			    })
// 			    Albums.splice( requestedPage, data.result.albums.length ,data.result.albums );	
// 		    	console.log("Albums.splice",Albums);
// 		    	return Albums;
// 		    })
// 			.error( function(msg, code) {
// 			    deferred.reject(msg);
// 			    $log.error(msg, code);
// 			})
//         return deferred.promise;
// 	}

});
