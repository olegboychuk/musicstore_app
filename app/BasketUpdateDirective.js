app.directive('updateBasket',['CartFactory', function( CartFactory ){
	return {
		restrict: 'E',
		templateUrl:'app/_showbasket.html',
		link: function link( scope, element, attrs ) {
		 	
		 	scope.loadCount = function(){
   	           var items = CartFactory.getProducts();
	           scope.count = items.length;   
           }
	    }
   }
}]);