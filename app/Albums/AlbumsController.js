
AlbumsModule.controller( 'AlbumsController',function( $log,$scope,AlbumsFactory){
    AlbumsController = {};
    $scope.busy = false;
	$scope.albums = [];
    $scope.loading = false;
    $scope.nextalbums = [];
        
    // $scope.toogleAlbum = function ( indexAlbum ){   
    //     console.log( "indexAlbum",indexAlbum );  
    //     $scope.album = AlbumsFactory.getAlbumDetails( indexAlbum );  
    // }

    $scope.loadMore= function(next){
        if($scope.busy)  return;
        $scope.loading = true;
        $scope.busy = true;
       
        var nextalbums = AlbumsFactory.getNextPage( );
        nextalbums.then( function( data ){
            console.log("data",data);
            $scope.albums.push( data );
            console.log("$scope.albums11",$scope.albums.length);
        }),function(error){
           console.log("error",error);
           alert(error);
        }
        console.log("nextalbums",$scope.nextalbums);
        $scope.busy = false;
    }

    $scope.loadAlbums = function(){
		var getAlbums = AlbumsFactory.getNextPage();
		getAlbums.then( function( data ){
			$scope.albums = data.albums;
			console.log( "getalbums00",data );
		});	
    };

   $scope.loadAlbums();

  //  $scope.loadMore = function( ) {  	
    //	if ($scope.busy)  return;
    	//$scope.loading = true;
      //  $scope.busy = true;

     //  $scope.loadAlbums();
        //console.log(" AlbumsFactory.getNextPage", AlbumsFactory.getNextPage());
       
         //doesnt work???
        // getAlbums.fail( function( msg ){
        // 	console.log("msg",msg);
        // });

     //    getAlbums.then( function( data ){
		  	// albums = data.albums;
     //       	console.log("getalbums222",albums);
     //        if(albums=[]){
     //        	   	console.log("albumserrror",albums);
     //        	   	//alert("albums");
     //        	   	return $scope.albums;	
     //        } else{  
                 
          //       var len = $scope.albums.length;     
          //   	console.log("albums",$scope.albums);
          //   	//console.log("$scope.albums.length",$scope.nextalbums.length);
          //    	for(var i = 0; i<3; i++) {	
          //          alert("123");
          //          len = $scope.nextalbums.length; 
          //          $scope.loadAlbums();
          //          console.log("scopealbums.length111",$scope.albums[i]);
			       // $scope.nextalbums.push( $scope.albums[i]); 
		        //    console.log("scopealbums.length222",$scope.nextalbums);
		        // }
            // }            
		 //   $scope.busy = false;
	    // });	
	
   // };


   	
});