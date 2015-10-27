AlbumsModule.directive( 'AlbumsFactory',function( $http,$q ){
	var AlbumsFactory = {};
	var Albums = [];
	var urlBase = 'api/albums'

	AlbumsFactory.getAlbums = function(){
		return Albums;
	};

	AlbumsFactory.getAlbumDetails = function( albumIndex ){
		return Albums[albumIndex];
	};

    AlbumsFactory.promiseAlbums = function(){
	 	return $http.get( urlBase );
	};

	
	function connectToAlbums(){
		return $http.get( urlBase );
	};

	function getAlbums(){
		connectToAlbums();
		.success(function(albums){
			Albums = albums;
		});
	}
	getAlbums();

	return AlbumsFactory;
});