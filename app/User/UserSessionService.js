UserModule.service('Session', function ( UserAuthService ) {
  var ses = UserAuthService.get();
  console.log("ses",ses);

  // this.create = function ( sessionId ) {
  //   console.log( "sessionId",sessionId );
  //   this.id = sessionId;
  //   this.userId = userId;
  //   this.userRole = userRole;
  // };
  // this.destroy = function () {
  //   this.id = null;
  //   this.userId = null;
  //   this.userRole = null;
  // };
})
