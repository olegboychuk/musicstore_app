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

	$scope.submitLogin = function(login) {
	    $scope.submited = true;

	    if(login.$invalid) {
	        return;
	    }
	};
	$scope.submitRegister = function(registration) {
	    $scope.submited = true;

	    if(registration.$invalid) {
	        return;
	    }
	};
    

/* Password confirmation */
	(function() {

        //var RegistrationController = function() {
            //var model = this;
/*
            model.message = "";

            model.user = {
                username: "",
                password: "",
                confirmPassword: ""
            };*/


        //};

    var compareTo = function() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    };

    LoginModule.directive("compareTo", compareTo);
   // app.controller("RegistrationController", RegistrationController);

}());

	
	$scope.insertData = function() {
	        $http.post("insert.php", {
	            'email':$scope.email, 'password':$scope.password, 'firstName':$scope.firstName, 'lastName':$scope.lastName
	        })
	            .success(function(data, status, headers, config) {
	                console.log("data inserted successfuly");

	            });
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
