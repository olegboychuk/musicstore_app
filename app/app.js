"use strict";
var app = angular.module( 'musicStore',['ncy-angular-breadcrumb','ngCookies','ngAnimate','LocalStorageModule','infinite-scroll','ui.router','Search','User','Albums','Cart','Genre']);

app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
           console.log("$scope.searchString",searchString);

        angular.forEach(arr, function(item){
        	console.log("itemalbum_name",item.album_artist);
            if(item.album_artist.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
            console.log("result",result);
        }
        });
        return result;
    };
});

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('musicStore')
      .setStorageCookie(45, '<path>')
      .setStorageCookieDomain('')
      .setNotify(true, true)
}])



app.config(function( $stateProvider,$urlRouterProvider ){
 $urlRouterProvider.when("", '/home');
    $urlRouterProvider.otherwise('/home');

    $stateProvider

	
	.state('home',{
		url:'/home',
		templateUrl: "app/Albums/_home.html",
		controller: 'AlbumsController',
        label: 'Home'
	})

	
	.state('login',{
		url:'/login',
		templateUrl:"app/User/_login.html",
		controller:'UserController'
	})

	
	.state('home.album',{
		url:'/album/:id',
		templateUrl:"app/Albums/_album.html",
		controller:'SelectedAlbumController',
        label: 'Album'
	})

	
	.state('genre-albums:id',{
		url:'/genre-albums:id',
		templateUrl:"app/Albums/_genre-albums.html",
		controller:'AlbumsGenreController',
		link:function link(){
			alert("hello");
		},
        label: 'Albums by genre'
	})

	
	.state('check-out',{
		url:'/check-out',
		templateUrl:"app/Cart/_check-out-1.html",
		controller:'CartController'
	})

    
	//.otherwise({ redirectTo: '/home' })
});





// app.config( function( $routeProvider,$locationProvider ){

// 	$routeProvider
// 	.when('/home',{
// 		templateUrl: "app/Albums/_home.html",
// 		controller: 'AlbumsController',
//         label: 'Home'
// 	});

// 	$routeProvider
// 	.when('/login',{
// 		templateUrl:"app/User/_login.html",
// 		controller:'UserController'
// 	});

// 	$routeProvider
// 	.when('/album:id',{
// 		templateUrl:"app/Albums/_album.html",
// 		controller:'SelectedAlbumController',
//         label: 'Album'
// 	});

// 	$routeProvider
// 	.when('/genre-albums:id',{
// 		templateUrl:"app/Albums/_genre-albums.html",
// 		controller:'AlbumsGenreController',
// 		link:function link(){
// 			alert("hello");
// 		},
//         label: 'Albums by genre'
// 	});

// 	$routeProvider
// 	.when('/check-out',{
// 		templateUrl:"app/Cart/_check-out-1.html",
// 		controller:'CartController'
// 	});

//     $routeProvider
// 	.otherwise({ redirectTo: '/home' });
// });


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

app.run( function($rootScope,AUTH_EVENTS, UserAuthService) {
  $rootScope.$on('$routeChangeStart ', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    if (!UserAuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (UserAuthService.isAuthenticated()) {
        // user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
})


app.run( function( $rootScope,$location,UserFactory,UserAuthService ){
	var routespermission = ['/check-out'];
	console.log( "routespermission.indexOf",routespermission );
	console.log( "UserAuthService.isLogged()",!UserAuthService.isLogged() );
	console.log( "$location.path()",$location.path() !=-1 );

	$rootScope.$on( '$routeChangeStart', function(){
		if (  !UserAuthService.isLogged() ) {
			$location.path('/login');
		};
	});
})

app.constant('USER_ROLES', {
  // all: '*',
  admin: 'admin',
  editor: 'admin',
  // guest: 'guest'
})


app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

/*-------AUTHENTICATION----END----------*/




app.controller('mainController',function( $timeout,$log, $http, $q, $scope,USER_ROLES,localStorageService,CartFactory, GenreFactory, UserFactory, AlbumsFactory,AlbumsGenreFactory,UserAuthService ){

  var storageType = localStorageService.getStorageType();

  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
 // $scope.isAuthorized = UserAuthService.isAuthorized;
 //console.log("$scope.isAuthorized",$scope.isAuthorized);
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
      
});