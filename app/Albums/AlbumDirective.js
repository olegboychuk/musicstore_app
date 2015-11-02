AlbumsModule.directive('getAlbums', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/Albums/_home.html',
		controller: 'AlbumController'
	};
});