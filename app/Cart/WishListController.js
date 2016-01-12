CartModule.controller('WishListController', [ function( $rootScope,$scope,localStorageService,AlbumsFactory,CartFactory,UserAuthService ){ 

	// $rootScope.$on('statusLogin',function(event,data){
	//     	var userObject = UserAuthService.get();
	//     	keyOfUserCart = userObject.user_id;
	//     	console.log("wishListkeyOfUserCart",keyOfUserCart);
 //    });

	$scope.wishList = ['sdasdds'];
	//localStorageService.get();


}])