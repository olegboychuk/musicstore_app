GenreModule.directive('genre-list',function(){
	return {
		restrict: 'E',
		tamplateUrl: 'app/Genre/_genre-list.html',
		controller: 'GenreController'
    };
});
