"use strict";
var app = angular.module('musicStore',['User','Albums','Cart','Genre']);

app.controller('mainController',function( $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){
	console.log("check controller");
	console.log("$scope.albums",AlbumsFactory.getAlbums());
	
	$scope.albums = [];
    AlbumsFactory.promiseAlbums( 4 )
	.success( function( responce ){
		$scope.albums = albums;
		console.log("$scope.albums",$scope.albums);
	});
	
	//$scope.albums = AlbumsFactory.getAlbums(); 
	console.log( "$scope.albums",$scope.albums );
});