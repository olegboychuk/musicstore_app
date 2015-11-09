
AlbumsModule.controller( 'AlbumController',function( $log,$scope,AlbumsFactory ){
    $scope.busy = false;
	$scope.albums = [];
    $scope.loading = false;

    $scope.loadAlbums = function(){
		var getAlbums = AlbumsFactory.getAlbums();
		getAlbums.then( function( data ){
		  	$scope.albums = data.albums;
		});
	}
    $scope.loadAlbums();

    $scope.loadMore = function() {
    	if ($scope.busy)  return;
    	$scope.loading = true;
        $scope.busy = true;
        //var items = AlbumsFactory.getNextPage()
        //var last = $scope.albums[$scope.albums.length - 1];
        var getAlbums = AlbumsFactory.getNextPage(1);
        getAlbums.then( function( data ){
		  	var albums = data.albums;
		  	console.log("albums",albums);
		    for(var i = 0; i< albums.length; i++) {	
		    console.log("$scope.albums.length",$scope.albums.length);
		       console.log("$scope.albums[i]",$scope.albums[i]);    		        
		       console.log("i",i);
		       console.log("albums[i]",albums[i]);
		       $scope.albums.push(albums[i]);        
		    }
		    $scope.busy = false;
	   });	    
   };
});