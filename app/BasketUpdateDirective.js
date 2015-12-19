app.directive('updateBasket',['CartFactory', function( CartFactory ){
	return {
		 restrict: 'E',
		  templateUrl:'app/_showbasket.html',
		 //controller: 'mainController'
		 link: function link(scope, element, attrs) {

            console.log("element",element[0].offsetHeight);   
    
		 	// alert("working");
		 	// console.log(element);
		 	scope.loadCount = function(){
   	        var items = CartFactory.getProducts();
	        
	            scope.count = items.length;
	           
            }
            // scope.$watch('count',function(items){
            //  	//console.log("countwatch",scope.count);
         	  //  //scope.count = items.length;
      	     //   console.log("countwatch",scope.count);
            // });
		 }
	}
}]);