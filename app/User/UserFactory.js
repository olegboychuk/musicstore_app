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
			// console.log("paramsres",res);
			
			var uid = res.data.result.user.user_id;
			if ( uid!==null ) {
				//var session = Session.create( res.data.result.user );
				UserAuthService.set( res.data.result.user );
			    $rootScope.$emit('isAuth',res.data.result.user ); 
				return $timeout(locationPath,1500)	
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

// 	UserModule.factory('customMessage', function () {
//     // invalid message service with message function
//     return {
//         // scopeElementModel is the object in scope version, element is the object in DOM version
//         message: function (scopeElementModel, element) {
//             var errors = scopeElementModel.$error;
//             if (errors.maxlength) {
//                 // be careful with the quote
//                 return "'Should be no longer than " + element.attributes['ng-maxlength'].value + " characters!'";
//             } else {
//                 // default message
//                 return "'This field is invalid!'";
//             }
//         }
//     };
// });