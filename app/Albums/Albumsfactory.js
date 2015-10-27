AlbumsModule.factory( 'AlbumsFactory',function( $http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums';

	AlbumsFactory.getAlbums = function(){
		return Albums;
	};

	AlbumsFactory.getAlbumDetails = function( albumIndex ){
		return Albums[albumIndex];
	};

    AlbumsFactory.promiseAlbums = function( start ){
	 		console.log("urlBase",urlBase + '/:'+start+'/');
	 	return $http.get( urlBase + '/:'+start+'/' );
	};

	AlbumsFactory.getPrice = function( albumIndex ){
		return Albums[albumIndex].price;
	}
	
	// function connectToAlbums(){
	// 	return $http.get( urlBase );
	// };

	// function getAlbums(){
	// 	connectToAlbums();
	// 	.success(function(albums){
	// 		Albums = albums;
	// 		console.log("Albums",Albums);
	// 	});
	// }
	// getAlbums();
	console.log("AlbumsFactory",AlbumsFactory);
	return AlbumsFactory;
});