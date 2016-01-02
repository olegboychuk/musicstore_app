"use strict";
var app = angular.module( 'musicStore',['ncy-angular-breadcrumb','ngCookies','ngAnimate','LocalStorageModule','infinite-scroll','ui.router','Search','User','Albums','Cart','Genre']);

app.filter('searchFor', function(){
    return function( arr, searchString ){
        if( !searchString ){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();         

        angular.forEach(arr, function(item){
            if(item.album_artist.toLowerCase().indexOf(searchString) !== -1){
               result.push(item);
            }
        });
        return result;
    };
});

//------localstorage--------
app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('musicStore')
      .setStorageCookie(45, '<path>')
      .setStorageCookieDomain('')
      .setNotify(true, true)
}])

//-----ui-router------
app.config(function( $stateProvider,$urlRouterProvider ){
 $urlRouterProvider.when("", '/home');
    $urlRouterProvider.otherwise('/home');

    $stateProvider
	.state('home',{
		url:'/home',
		templateUrl: "app/Albums/_home.html",
		//controller: 'AlbumsController',
        ncyBreadcrumb: {
           label: 'Home >'
        }
	}),

	$stateProvider
	.state('login',{
		url:'/login',
		templateUrl:"app/User/_login.html"
		//controller:'UserController'
	}),

	$stateProvider
	.state('album',{
		url:'/album/:id',
		templateUrl:"app/Albums/_album.html",
		// controller:'SelectedAlbumController',
        ncyBreadcrumb: {
           label: 'Album >',
           parent:'home'
        }
	}),

	$stateProvider
	.state('genre',{
		url:'/genre/:genreId',
		templateUrl:"app/Albums/_genre-albums.html",
		// controller:'AlbumsGenreController',    
        ncyBreadcrumb: {
           label: 'Albums by genre'
        }
	}),

	$stateProvider
	.state('genre.album',{
		url:'/album/:id',
		templateUrl:"app/Albums/_album.html",
		//controller:'SelectedAlbumController',
        ncyBreadcrumb: {
           label: 'Album page',
           parent:'genre'
        }
	}),

	$stateProvider
	.state('check-out',{
		url:'/check-out',
		templateUrl:"app/Cart/_check-out-1.html",
		data: {
          requireLogin: true
        }
	}),

	$stateProvider
	.state('account',{
		url:'/account',
		templateUrl:"app/Cart/_check-out-1.html",
		data: {
          requireLogin: true
        }
	}),

	$stateProvider
	.state('wishlist',{
		url:'/wishlist',
		templateUrl:"app/Cart/_check-out-1.html",
		data: {
          requireLogin: true
        }
	})
});


app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})


// app.run( function( $rootScope,AUTH_EVENTS,UserAuthService ){
//     $rootScope.$on('isAuth',function( event,data ){ 

// 	 	if ( data ) {
// 		    if ( UserAuthService.isLogged() ) {
// 		        // user is not allowed
// 		        $rootScope.$broadcast('loginSuccess',AUTH_EVENTS.loginSuccess);
		        
// 		      } else {
// 		        // user is not logged in
// 		        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
// 		    }
// 	    }	   
//     });
// })


/*-------AUTHENTICATION----START----------*/

// app.config(function ($stateProvider, USER_ROLES) {
//   $stateProvider.state('dashboard', {
//     url: '/dashboard',
//     templateUrl: 'dashboard/index.html',
//     data: {
//       authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
//     }
//   });
// })

// app.run( function($rootScope,AUTH_EVENTS, UserAuthService) {
//   $rootScope.$on('$routeChangeStart ', function (event, next) {
//     var authorizedRoles = next.data.authorizedRoles;
//     if (!UserAuthService.isAuthorized(authorizedRoles)) {
//       event.preventDefault();
//       if (UserAuthService.isAuthenticated()) {
//         // user is not allowed
//         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
//       } else {
//         // user is not logged in
//         $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
//       }
//     }
//   });
// })


// app.run( function( $rootScope,$location,UserFactory,UserAuthService ){
// 	var routespermission = ['/check-out'];
// 	console.log( "routespermission.indexOf",routespermission );
// 	console.log( "UserAuthService.isLogged()",UserAuthService.isLogged() );
// 	console.log( "$location.path()",$location.path() !=-1 );

// 	$rootScope.$on( '$stateChangeStart', function(){
// 		if (  routespermission.indexOf($location.path()) !=-1 && UserAuthService.isLogged() ) {
// 			$location.path('/login');
// 		};
// 	});
// })

// app.run('ses', ['$rootScope', function( $rootScope,AUTH_EVENTS ){
// 	$rootScope.$on('listenerSes',function(name,data) {
// 		console.log("sesdata",data);
// 		//AUTH_EVENTS.loginSuccess
// 	});
// }])

// app.constant('USER_ROLES', {
//   // all: '*',
//   admin: 'admin',
//   editor: 'admin',
//   // guest: 'guest'
// })




/*-------AUTHENTICATION----END----------*/




app.controller('mainController',function( $rootScope,$timeout,$log, $http, $q, $scope,AUTH_EVENTS,localStorageService,CartFactory, GenreFactory, UserFactory, AlbumsFactory,AlbumsGenreFactory,UserAuthService,Session ){
   
    var storageType = localStorageService.getStorageType();
    
    $scope.dataUser=[];
    $scope.currentUser = null;
    console.log("AUTH_EVENTS",AUTH_EVENTS); 
   
    $scope.isLogged = function (){
	    var permision = UserAuthService.isLogged();
	  	if ( permision ) {
	  		$scope.login = false;
	  		$scope.logout = true;
	  	}else{
	  		$scope.login = true;
	  		$scope.logout = false;
	  	}
    }
    
    $scope.isLogged ();

    $rootScope.$on('isAuth',function( event,data ){        	
	 	if ( data ) {
		    if ( UserAuthService.isLogged() ) {
		        $scope.dataUser = data.user_email; 
		        console.log("$scope.dataUser",data);
		        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
		        $scope.login = false;
	  		    $scope.logout = true;
		        
		      } else {
		        // user is not logged in
		        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
		    }
	    }	   
    });

	$scope.signOut = function (){
		var permisionout = UserAuthService.destroy();
		console.log("permisionout",permisionout);
		$scope.login = true;
  		$scope.logout = false;
	}


  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
      
});