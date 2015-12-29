UserModule.controller('UserController',function($scope,$timeout,UserFactory){
  $scope.user = {};
  $scope.reguser = {};
  $scope.user_email="";
  $scope.visible = false;
  //$scope.noEnter = false;

  var defaultForm={
        firstName: "",
        lastName: "",
        email:""
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
    console.log("login",login);

    $scope.submitted = true;
    param = angular.toJson($scope.user)
    // console.log("param",param);
   
    UserFactory.matchUser( param )
    .then( function( responce ){ 
      console.log("responce",responce);     
      $scope.logResponce = responce.data.result.msg;
    }); 


  };

	$scope.submitRegister = function( registration ) {
    //console.log("registration",registration);
    $scope.submitted = true;
    if( registration ) {
      
      //console.log("$scope.reguser",$scope.reguser);
      var password = $scope.reguser.pass.password;    
        
      //console.log(" $scope.registration$invalid", $scope.registration);
      $scope.reguser['pass']=password;
      
      param = angular.toJson($scope.reguser)
      //console.log("param",param);
     
      UserFactory.registerUser( param )
      .then( function( responce ){      
        
        if( responce.data.code !== 200 ){
          $scope.regResponce = responce.data.error;
          $scope.noEnter = true;

        }else{
          $scope.regResponce = responce.data.result;
                
          var visibleCongrats = function() {
            $scope.visible = false;
            //$timeout(visibleCongrats, 500);
          }
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
