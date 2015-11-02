"use strict";
var app = angular.module( 'musicStore',['User','Albums','Cart','Genre']);

app.config(function( $routeProvider ){

	$routeProvider
	.when('/home',{
		templateUrl:"Albums/_home.html",
		controller:'AlbumController'
	});

	$routeProvider
	.when('/album/:id',{
		templateUrl:"_index1.html",
		controller:''
	});
});

app.controller('mainController',function( $log, $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){
	console.log( "check controller " );
 
});