
AlbumsModule.controller( 'AlbumController',function( $log,$scope,AlbumsFactory ){
    $scope.busy = false;
	$scope.albums = [];
    $scope.loading = false;

 //    $scope.loadAlbums = function(){
	// 	var getAlbums = AlbumsFactory.getAlbums();
	// 	getAlbums.then( function( data ){
	// 	  	$scope.albums = data.Albums;
	// 	});
	// }
 //    $scope.loadAlbums();

    $scope.loadMore = function() {
    	if ($scope.busy)  return;
    	$scope.loading = true;
        $scope.busy = true;

        var getAlbums = AlbumsFactory.getNextPage();
        getAlbums.then( function( data ){
		  	var albums = data.Albums;
		  	console.log("albums000",albums);
		    for(var i = 0; i< albums.length; i++) {	
		       console.log("$scope.albums.length",$scope.albums.length);
		       console.log("$scope.albums",$scope.albums);    		        
		       console.log("i",i);
		       console.log("albums111",albums);
		       console.log("albums[i]",albums[i]);
		       $scope.albums.push(albums[i]); 
		       console.log("$scope.albums333",$scope.albums);        
		    }
		    $scope.busy = false;
	   });	    
   };
});