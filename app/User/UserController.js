LoginModule.controller('UserController', function($scope){
	$scope.visible = false;
  	$scope.showMe = function(){
  		console.log("ggggg");
		$scope.visible = !$scope.visible;
  	};
  
	  $scope.hideMe = function(){
	    $scope.visible=false;
	  }
});






// <body ng-app>
//   <div ng-controller="MyCtrl">
//     <button class="btn" ng-click="toggle()">Toggle</button>
//     <p ng-show="visible">Hello World!</p>
//   </div>
// </body>

// function MyCtrl($scope) {
//   $scope.visible = true;

//   $scope.toggle = function() {
//     $scope.visible = !$scope.visible;
//   };
// }
