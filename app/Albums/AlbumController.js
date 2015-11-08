
AlbumsModule.controller( 'AlbumController',function( $log,$http,$scope,AlbumsFactory ){

	$scope.albums = [];
    $scope.loading = false;

    $scope.loadAlbums = function(){
		var getAlbums = AlbumsFactory.getNextPage();
		getAlbums.then( function( data ){
		  	$scope.albums = data.albums;
		  	console.log( "albums[i]", $scope.albums );
	  	});
	}
    // $scope.loadAlbums();


    $scope.loadMore = function() {
    	$scope.loading = true;
	    var last = $scope.albums [$scope.albums.length - 1];
	    console.log(" last[i]", last);
	    for(var i = 1; i <= 2; i++) {
	    	$scope.loadAlbums();
	        $scope.albums.push(last + i);
	    }
   };
});