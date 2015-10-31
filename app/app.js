"use strict";
var app = angular.module( 'musicStore',['User','Albums','Cart','Genre']);

app.controller('mainController',function( $log, $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){
	console.log( "check controller " );
	$scope.albums = [];

	$scope.price = AlbumsFactory.getPrice(0);
	console.log("$scope.$scope.price",$scope.price);
     
	// AlbumsFactory.getAlbums( 2 );
	// promise.then(
	//     function( payload ) {
	//     	console.log("payload",payload);
	//         $scope.albums = payload;
	//         console.log("$scope.albums",$scope.albums);
	//     },
	//     function(errorPayload) {
	// 	   $log.error('failure loading albums', errorPayload);
	// 	}
	// );
	// console.log("promise",promise);

   // $scope.albums = AlbumsFactory.getAlbums(2); 
  // console.log("$scope.albums",$scope.albums);
});