UserModule.factory( 'User',function( $http ){
	var urlBase = 'api/user'
	var user=[];
	var User={};

	User.addUser = function(){
		
	};

	User.matchUser = function(){
		$http.post(urlBase);
		return false
	};

	User.getUserDetails =function(){
		
	};


	return User;
});