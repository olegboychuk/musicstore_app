"use strict";
var app = angular.module( 'musicStore',['User','Albums','Cart','Genre']);

app.controller('mainController',function( $log, $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){
	console.log( "check controller " );
	$scope.albums = [];
	
	$scope.getAlbums = function() {
	   $scope.albums = AlbumsFactory.getAlbums();
   };
   
   $scope.getAlbums();
     
	// var promise =  AlbumsFactory.getNext( 2 );
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
	console.log("promise",promise);

   // $scope.albums = AlbumsFactory.getAlbums(); 
  console.log("$scope.albums",$scope.albums);
});