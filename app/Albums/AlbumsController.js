
AlbumsModule.controller( 'AlbumsController',function( $log,$scope,AlbumsFactory){
    $scope.busy = false;
	$scope.albums = [];
    $scope.loading = false;
    $scope.nextalbums = [];

    $scope.loadMore= function(next){
        if($scope.busy)  return;
        $scope.loading = true;
        $scope.busy = true;
       
        var nextalbums = AlbumsFactory.getNextPage( );
        nextalbums.then( function( data ){
            console.log("data",data);
            $scope.albums.splice( $scope.albums.length,data.length,data );
            console.log("$scope.albums.length",$scope.albums.length);
        }),function(error){
           console.log("error",error);
           alert(error);
        }
        $scope.busy = false;
    }

  //   $scope.loadAlbums = function(){
		// $scope.albums = AlbumsFactory.getAlbums();
		// // getAlbums.then( function( data ){
		// // 	$scope.albums = data.albums;
		//  	console.log( "getalbums00",$scope.albums );
		// // });	
  //   };
  //   
    $scope.loadAlbums = function(){
        var getAlbums = AlbumsFactory.getNextPage();
        getAlbums.then( function( data ){
            $scope.albums = AlbumsFactory.getAlbums();
            console.log( "getalbums00",$scope.albums );
            console.log( "getalbums",AlbumsFactory.getAlbums() );

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