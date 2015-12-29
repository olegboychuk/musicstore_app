UserModule.factory( 'UserFactory',function( $http,$location,$log,$rootScope,AuthService,Session ) {
	
	var UserFactory={};
	var urlBaseLogin = 'api/login';
	var urlBaseRegistr = 'api/registruser';
   // var promise = null;
	var user=[];
	

	UserFactory.addUser = function(){
		
	};

	UserFactory.matchUser = function( jsonParams ){
		//console.log("params",jsonParams);
	   var promise = $http.post( urlBaseLogin,jsonParams );
		promise.then(function (res) {
			console.log("paramsres",res);
			var uid = res.data.result.user;
			console.log("AuthService",AuthService);

			console.log("uid",uid);
			if ( uid ) {
				Session.create( uid );
	            console.log("session",Session);
	         // return res.data.user;
	         return AuthService.isAuthorized();
				AuthService.set( 'user',uid );
				$location.path('/home');
			};
			
	        
        });
        return promise;
	};

	UserFactory.registerUser = function( jsonParams ){
		//console.log("params",jsonParams);
		return $http.post(urlBaseRegistr,jsonParams);
	};

	UserFactory.getUserDetails = function(){
		
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