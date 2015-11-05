
AlbumsModule.controller( 'AlbumController',function( $log,$http,$scope,AlbumsFactory ){
	
	$scope.albums = [];
	console.log( "cAlbumsFactory.getAlbums",AlbumsFactory.getAlbums() );
	
	var getAlbums = AlbumsFactory.getAlbums();
	  getAlbums.then( function( data ){
	  	$scope.albums = data.albums;
	  	console.log("$scope.albums",$scope.albums);
	  });

});