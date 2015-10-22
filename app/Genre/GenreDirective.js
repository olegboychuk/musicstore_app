GenreModule.directive('genreList',function(){
	return {
		restrict: 'E',
		templateUrl: 'app/Genre/_genre-list.html',
		controller: 'GenreController'
    };
});

