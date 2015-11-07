"use strict";
var app = angular.module( 'musicStore',['infinite-scroll','ngRoute','User','Albums','Cart','Genre']);

app.config(function( $routeProvider,$locationProvider ){

    $routeProvider
	.when('/',{
		templateUrl:"_index1.html",
		controller:''
	});

	$routeProvider
	.when('/home',{
		templateUrl:"app/Albums/_home.html",
		controller:'AlbumController'
	});

	$routeProvider
	.when('/album/:id',{
		templateUrl:"_index1.html",
		controller:''
	});

    $routeProvider
	.otherwise({ redirectTo: '/' });
});

app.controller('mainController',function( $log, $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){
	console.log( "check controller " );
 
});