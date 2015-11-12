
AlbumsModule.controller( 'AlbumController',function( $log,$scope,AlbumsFactory){
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
    	//$scope.loading = true;
        $scope.busy = true;

        var getAlbums = AlbumsFactory.getNextPage();
        getAlbums.then( function( data ){
		  	var albums = data.albums;
             console.log("albums.length",albums.length);
		    for(var i = 0; i<albums.length; i++) {	
		       console.log("albums.length",albums.length);
		       $scope.albums.push( albums[i] ); 
		 
		       console.log("$scope.albums333",$scope.albums);        
		    }
		    console.log("$scope.albums.length",$scope.albums.length);
		    $scope.busy = false;
	    });	    
    };

    $scope.chooseAlbum = function (indexAllbum){
    	var album = AlbumsFactory.getAlbumDetails(indexAllbum);
    }

});