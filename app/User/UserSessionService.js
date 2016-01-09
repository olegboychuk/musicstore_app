UserModule.service('Session', function ( UserAuthService,$rootScope ) {
  //var SessionData = "SessionData";
   var ses = UserAuthService.get();
   console.log( "ses",ses);
   
  var userData = {};
  $rootScope.$on('_isSessionData',function( event,value ){
    userData = value;
    console.log("_isSessionData",userData)
    // this.create(userData);
  });
  
  this.create = function ( sessionId ) {
    console.log( "sessionId",sessionId.user_email );
    this.id = sessionId;
    this.user_id = sessionId.user_id;
    this.user_email = sessionId.user_email;
    this.user_lastname = sessionId.user_lastname;
    this.user_firstname = sessionId.user_firstname;
  };
  
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };

})

