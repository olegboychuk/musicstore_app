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