CartModule.controller('WishListController', function( $rootScope,$scope,localStorageService,AlbumsFactory,CartFactory,UserAuthService ){ 
	console.log("UserAuthService",UserAuthService.get());
	var user = UserAuthService.get();
	$rootScope.$on('statusLogin',function(event,data){
	    	var userObject = UserAuthService.get();
	    	keyOfUserCart = userObject.user_id;
	    	console.log("wishListkeyOfUserCart",keyOfUserCart);
    });
	$scope.search= []
	$scope.wishList = [];
	//localStorageService.get();


})