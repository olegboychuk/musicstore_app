LoginModule.controller('UserController', function($scope){
	// var self = this;
 //        self.submit = function() {
 //        console.log('Form is submitted with following user', self.firstName, self.lastName , self.regEmail);
 //    };

	$scope.visible = false;
  	$scope.showMe = function(){
  		console.log("ggggg");
		$scope.visible = !$scope.visible;
  	};
  
	$scope.hideMe = function(){
		$scope.visible = false;
	};

	$scope.submitLogin=function(login) {
	    $scope.submited = true;

	    if(login.$invalid) {
	        return;
	    }
	};
	$scope.submitRegister=function(register) {
	    $scope.submited = true;

	    if(registration.$invalid) {
	        return;
	    }
	};
  



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
