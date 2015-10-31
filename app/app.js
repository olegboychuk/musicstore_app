"use strict";
var app = angular.module('musicStore',['User','Albums','Cart','Genre']);

app.controller('mainController',function( $log, $http, $q, $scope, CartFactory, GenreFactory, UserFactory, AlbumsFactory ){
	console.log("check controller");
	//console.log("$scope.albums",AlbumsFactory.getAlbums());
	
	$scope.albums = [];
 //    AlbumsFactory.getAlbums( 10 )
	// .success( function( albums ){
	// 	$scope.albums = albums;
	// 	console.log("$scope.albums",$scope.albums);
	// });
	

     var promise = AlbumsFactory.getAlbums();
     promise.then(
        function(payload) {
        	 console.log("payload",payload);
            $scope.albums = payload.data;
            console.log("$scope.albums",$scope.albums);
        },
        function(errorPayload) {
		   $log.error('failure loading movie', errorPayload);
		}
	 );

	// $scope.albums = AlbumsFactory.getAlbums(); 
	console.log( "$scope.albums",$scope.albums );
});