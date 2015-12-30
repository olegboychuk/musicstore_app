'use strict';

UserModule.factory('UserAuthService',['$http', function ($http,$cookies,Session) {
  // return {
  //   set:function( key,value ){
  //     console.log("sessionStorage",sessionStorage);
  //     return sessionStorage.set( key,value );
  //   },
  //   get:function( key ){
  //     return sessionStorage.getItem(key);
  //   },
  //   destroy:function( key ){
  //     return sessionStorage.destroyItem(key);
  //   },
  // }
  var UserAuthService = {};
  var _isloggedIn = undefined;

  UserAuthService.isAuthorized = function(){
      _isloggedIn = Session
      console.log("sesion_id",Session);
      if (_isloggedIn) 
        return true;
      return false;   
  }

  UserAuthService.setSession = function(key,value){
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
 
   return UserAuthService;
  
}]);