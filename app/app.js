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
           label: 'Home / '
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
           label: 'Album /',
           parent:'home'
        }
	}),

	$stateProvider
	.state('genre',{
		url:'/genre/:genreId/:genreName',
		templateUrl:"app/Albums/_genre-albums.html",
		controller:'AlbumsGenreController',    
        ncyBreadcrumb: {
           label: ' Genre  {{genreName}} /',
           parent: 'home'
        }
	}),

	$stateProvider
	.state('album.genre',{
		url:'/:genreId/:genreName/album/:id',
		templateUrl:"app/Albums/_album.html",
		controller:'SelectedAlbumController',
        ncyBreadcrumb: {
           label: 'Album ',
           parent:'genre'
        }
	}),

	$stateProvider
	.state('check-out',{
		url:'/check-out',
		templateUrl:"app/Cart/_check-out-1.html",
		controller:'AlbumsGenreController', 
		data: {
          requireLogin: true
        }
	}),

	$stateProvider
	.state('account',{
		url:'/account',
		templateUrl:"app/User/_account.html",
		data: {
          requireLogin: true
        }
	}),

	$stateProvider
	.state('myWishlist',{
		url:'/wishlist',
		templateUrl:"app/Cart/_wishlist.html",
		controller: "WishListController"
		// data: {
  //         requireLogin: true
  //       }
	}),

	$stateProvider
	.state('paymethod',{
		url:'/_payment_card',
		templateUrl:"app/Cart/_check-out-11.html",
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


app.run( function( $rootScope,$location,UserFactory,UserAuthService ){
	var routespermission = ['/check-out'];
	console.log( "routespermission.indexOf",routespermission );
	console.log( "UserAuthService.isLogged()",UserAuthService.isLogged() );
	console.log( "$location.path()",$location.path() !=-1 );

	$rootScope.$on( '$stateChangeStart', function(){
		if (  routespermission.indexOf($location.path()) !=-1 && !UserAuthService.isLogged() ) {
			$location.path('/login');
		};
	});
})

/*-------AUTHENTICATION----END----------*/




app.controller('mainController',function( $rootScope,$timeout,$log, $http, $q, $scope,AUTH_EVENTS,localStorageService,CartFactory, GenreFactory, UserFactory, AlbumsFactory,AlbumsGenreFactory,UserAuthService,Session ){
 
    var storageType = localStorageService.getStorageType();
    
    $scope.dataUser=[];

    $scope.isLogged = function (){
    	$scope.dataUser=$rootScope.user; 
	    var permision = UserAuthService.get();
	  
	  	if ( permision ) {
	  		$rootScope.$broadcast('statusLogin',AUTH_EVENTS.loginSuccess,permision);
	  		$scope.dataUser = permision.user_firstname;
	  		$rootScope.idUser = permision.user_id;
	  		$scope.login = false;
	  		$scope.logout = true;
	  	}else{
	  		$scope.login = true;
	  		$scope.logout = false;
	  	}
    }
    
    $scope.isLogged ();

    $scope.signOut = function (){
		UserAuthService.destroy();
		$rootScope.$broadcast('statusLogin',AUTH_EVENTS.logoutSuccess);
		$scope.login = true;
  		$scope.logout = false;
	}


    $rootScope.$on('_isSessionData',function( event,data ){        	
	 	if ( data ) {
	 		$rootScope.user = data;
	 		console.log("data",data);
		    if ( UserAuthService.isLogged() ) {
		    	$scope.isLogged ();
		        $scope.login = false;
	  		    $scope.logout = true;
		        
		      } else {
		        // user is not logged in
		        $rootScope.$broadcast('statusLogin',AUTH_EVENTS.notAuthenticated);
		    }
	    }	   
    });


});