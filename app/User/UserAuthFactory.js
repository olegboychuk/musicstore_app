// 'use strict';

UserModule.factory('UserAuthService',['$http','$cookies','$cookieStore','$rootScope','$location', 
  function( $http,$cookies,$cookieStore,$rootScope,$location,Session ){
     var userData = {};

    return { 
      set:function( value ){
        $cookies.put( 'SessionData',value );
      },
      get:function( ){
        var value = $cookies.get('SessionData' );
        console.log("value",value);
        var data = angular.fromJson( value );
        return data;
      },
      destroy:function( ){
        $cookies.remove('SessionData');
        $location.path('/login');
      },
      isLogged:function(){
        if( $cookies.get( 'SessionData' ) ){
            return true; 
        }else{
            return false;
        } 
      }
    }
  }
]);

