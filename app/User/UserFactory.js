UserModule.factory( 'UserFactory',function( $http ){
	var urlBase = 'api/user'
	var user=[];
	var UserFactory={};

	UserFactory.addUser = function(){
		
	};

	UserFactory.matchUser = function(){
		$http.post(urlBase);
		return user;
	};

	UserFactory.getUserDetails =function(){
		
	};


	return UserFactory;
});