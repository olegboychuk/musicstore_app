
AlbumsModule.controller( 'AlbumController',function( $log,$http,$scope,AlbumsFactory ){
	

	// $scope.myCart = myCart;
	// console.log("$scope.myCart",$scope.myCart);
	$scope.albums = [];

	var getAlbums = AlbumsFactory.getAlbums();
	    $scope.myCart=false;
	    getAlbums.then( function( data ){
	  	$scope.albums = data.albums;
	  	console.log(" albums[i]", $scope.albums);
  	    });


	//  var albums = [];
	//  $scope.headAlbums = [];
	
	// var getAlbums = AlbumsFactory.getAlbums();
	//     getAlbums.then( function( data ){
	//   	albums = data.albums;
	//   	console.log("albums0",albums[2]);
	//   	var headAlbums = [];
	//   	for (var i = 0; i<albums.length; i++) {
	//   		console.log(" albums[i]", albums[i]);

	//   		 $scope.headAlbums.push(albums[i]);	
 //  	    };
  	     
 //  	    console.log("$scope.headAlbums",$scope.headAlbums);
	//   	console.log("albums",albums);
	//   });

	// var showHeadAlbums = function(){	  	
	//   	getAlbums.then( function( data ){
	// 	  	albums = data.albums;
		  	
	//     });    
	// }
	// showHeadAlbums();
});