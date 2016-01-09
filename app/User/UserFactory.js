UserModule.factory( 'UserFactory',function( $timeout,$cookies,$cookieStore,$http,$location,$log,$rootScope,UserAuthService,Session ) {
	
	var UserFactory={};
	var urlBaseLogin = 'api/login';
	var urlBaseRegistr = 'api/registruser';
    var promise = null;
	var user=[];
	var session = null;

	function locationPath(){
		$location.path('/home');
	} 

	UserFactory.matchUser = function( jsonParams ){
	    var promise = $http.post( urlBaseLogin,jsonParams );
		promise.then(function (res) {

			var uid = res.data.result.user.user_id;
			if ( uid!==null ) {
				
				//put responce object to json for cookies
				var cookieJSON = angular.toJson( res.data.result.user );

				//create cookies with session parametries
				UserAuthService.set( cookieJSON );
			    
			    
			    $rootScope.$emit('_isSessionData',res.data.result.user ); 
				
				//relocate if found user
				return $timeout(locationPath,500)	
			};	        
        });
        return promise;
	};

	UserFactory.registerUser = function( jsonParams ){
		return $http.post(urlBaseRegistr,jsonParams);
	};

	UserFactory.logOut = function( jsonParams ){
		return $http.post(urlBaseRegistr,jsonParams);
	};

	return UserFactory;
});

