CartModule.directive('myCart', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/Cart/_cart.html',
		controller: 'CartController'
	};
});