"use strict";
var app = angular.module( 'musicStore',['infinite-scroll','ngRoute','User','Albums','Cart','Genre']);

// app.filter('capitalize', function() {
//   return function(input, scope) {
//     if (input!=null)
//     input = input.toLowerCase();
//     return input.substring(0,1).toUpperCase()+input.substring(1);
//   }
// });

app.config(function( $routeProvider,$locationProvider ){

	$routeProvider
	.when('/home',{
		templateUrl:"app/Albums/_home.html",
		controller:'AlbumsController'
	});

	$routeProvider
	.when('/login',{
		templateUrl:"app/User/_login.html",
		controller:'UserController'
	});

	$routeProvider
	.when('/registr',{
		templateUrl:"app/User/_registr.html",
		controller:'UserController'
	});

	$routeProvider
	.when('/album:id',{
		templateUrl:"app/Albums/_album.html",
		controller:'SelectedAlbumController'
	});

	$routeProvider
	.when('/genre-albums:id',{
		templateUrl:"app/Albums/_genre-albums.html",
		controller:'AlbumsController'
	});

    $routeProvider
	.otherwise({ redirectTo: '/home' });
});

app.controller('mainController',function( $log, $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){

});