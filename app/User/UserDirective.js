UserModule.directive('getUser', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/User/_login.html',
		controller: 'UserController'
	};
});