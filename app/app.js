"use strict";
var app = angular.module('musicStore',['User','Albums','Cart','Genre']);

app.controller('mainController',function( $scope, CartFactory, GenreFactory, UserFactory ){
	console.log("check controller");
	

});