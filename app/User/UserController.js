UserModule.controller('UserController',function($scope,$timeout,UserFactory){
  $scope.user = {};
  $scope.reguser = {};
  
  $scope.user_email="";
  $scope.visible = false;

  var defaultForm={
        firstName: "",
        lastName: "",
        email:""
  }
 
  var visibleCongrats = function() {
    $scope.visible = false;
  }

  $scope.resetForm = function (){      
    $scope.registration.$setPristine();
    $scope.reguser = angular.copy(defaultForm);
    $scope.noEnter = false;
    $scope.regResponce ="";
  };

	$scope.showMe = function(){
	  $scope.visible = !$scope.visible;
	};

	$scope.hideMe = function(){
		$scope.visible = false;
	};

  $scope.submitLogin = function( login ) { 
    if(login.$invalid) {
        return;
    }  
    $scope.submitted = true;
    param = angular.toJson($scope.user)
   
    UserFactory.matchUser( param )
    .then( function( responce ){    
      $scope.logResponce = responce.data.result.msg;
    }); 
  };

	$scope.submitRegister = function( registration ) {
    $scope.submitted = true;
    if( registration ) {

      $scope.reguser['pass'] = $scope.reguser.pass.password;   
      param = angular.toJson($scope.reguser)
     
      UserFactory.registerUser( param )
      .then( function( responce ){      
        
        if( responce.data.code !== 200 ){
          $scope.regResponce = responce.data.error;
          $scope.noEnter = true;

        }else{
          $scope.regResponce = responce.data.result;            
          $timeout(visibleCongrats, 3000);
          $scope.user_email = $scope.reguser.email;
        }  
      });
    }else{
      alert("again");
      $scope.regResponce = "try again";
    }   
	};


});
