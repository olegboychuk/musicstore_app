
app.config('appViewProvider',function( $routeProvider ){

	$routeProvider
	.when('/',{
		templateUrl:"Albums/_home.html",
		controller:'AlbumController'
	});

	$routeProvider
	.when('/album/:id',{
		templateUrl:"_index1.html",
		controller:''
	});
});