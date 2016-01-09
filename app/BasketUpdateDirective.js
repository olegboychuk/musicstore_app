app.directive('updateBasket',['CartFactory', function( CartFactory ){
	return {
		restrict: 'E',
		templateUrl:'app/_showbasket.html',
		 //controller: 'mainController'
		link: function link( scope, element, attrs ) {
            console.log("element",element[0].offsetHeight);   
		 	scope.loadCount = function(){
   	           var items = CartFactory.getProducts();
	           scope.count = items.length;   
           }
	    }
   }
}]);