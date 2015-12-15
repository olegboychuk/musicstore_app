"use strict";
var app = angular.module( 'musicStore',['LocalStorageModule','infinite-scroll','ngRoute','Search','User','Albums','Cart','Genre','Login']);

// app.constant('_', window._);

// app.filter('addclass',function(){
//     return function(activeValue,value){
//         if(activeValue==value)
//            return "active";
//         else
//            return "";
//     }
// });

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


app.config(function( $routeProvider,$locationProvider ){

	$routeProvider
	.when('/home',{
		templateUrl: "app/Albums/_home.html",
		controller: 'AlbumsController',
        label: 'Home'
	});

	$routeProvider
	.when('/login',{
		templateUrl:"app/User/_login.html",
		controller:'UserController'
	});

	$routeProvider
	.when('/album:id',{
		templateUrl:"app/Albums/_album.html",
		controller:'SelectedAlbumController',
        label: 'Album'
	});

	$routeProvider
	.when('/genre-albums:id',{
		templateUrl:"app/Albums/_genre-albums.html",
		controller:'AlbumsGenreController',
        label: 'Albums by genre'
	});

	$routeProvider
	.when('/check-out',{
		templateUrl:"app/Cart/_check-out-1.html",
		controller:'CartController'
	});

    $routeProvider
	.otherwise({ redirectTo: '/home' });
});

app.controller('mainController',function( $log, $http, $q, $scope,localStorageService,CartFactory, GenreFactory, UserFactory, AlbumsFactory,AlbumsGenreFactory ){

  var storageType = localStorageService.getStorageType();
});