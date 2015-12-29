'use strict';

UserModule.factory('AuthService',['$http', function ($http,$cookieStore,Session) {
  return {
    set:function( key,value ){
      console.log("sessionStorage",sessionStorage);
      return sessionStorage.set( key,value );
    },
    get:function( key ){
      return sessionStorage.getItem(key);
    },
    destroy:function( key ){
      return sessionStorage.destroyItem(key);
    },
  }
  AuthService = {};
  var _isloggedIn = undefined;

  AuthService.isAuthorized = function(){
      _isloggedIn = Session.id
      console.log("sesion_id",_isloggedIn);
      if (_isloggedIn) 
        return true;
      return false;   
  }

  AuthService.setSession = function(key,value){
     $cookieStore.put( 'SessionData', data);
     // var ses = 
  }


  // var authService = {};
 
  // authService.isLogin = function (credentials) {
  //   return $http
  //     .post('/login', credentials)
  //     .then(function (res) {
  //       Session.create(res.data.id, res.data.user.id,
  //                      res.data.user.role);
  //       return res.data.user;
  //     });
  // };
 
  // authService.isAuthenticated = function () {
  //   return !!Session.userId;
  // };
 
  // authService.isAuthorized = function (authorizedRoles) {
  //   if (!angular.isArray(authorizedRoles)) {
  //     authorizedRoles = [authorizedRoles];
  //   }
  //   return (authService.isAuthenticated() &&
  //     authorizedRoles.indexOf(Session.userRole) !== -1);
  // };
 
   return AuthService;
  
}]);