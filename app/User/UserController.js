LoginModule.controller('UserController', function($scope){
	var self = this;
        self.submit = function() {
        console.log('Form is submitted with following user', self.firstName);
    };

	$scope.visible = false;
  	$scope.showMe = function(){
  		console.log("ggggg");
		$scope.visible = !$scope.visible;
  	};
  
	$scope.hideMe = function(){
		$scope.visible = false;
	};
	// $scope.Log = function(){
	// 	console.log("log");

	// }
	// $scope.submitMyForm = function() {
 //        alert("Form submitted");
 //    };



    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Z]/)) {
            return "Password must have at least one capital letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
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
