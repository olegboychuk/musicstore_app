
AlbumsModule.controller( 'AlbumsController',function( $log,$scope,AlbumsFactory){
AlbumsModule.controller( 'AlbumsController',function( $location,$log,$scope,AlbumsFactory,GenreFactory,$routeParams){
    $scope.busy = false;
	  $scope.albums = [];
    $scope.loading = false;
    $scope.nextalbums = [];
    $scope.headclass = true;
    $scope.showPageTop = $location.path().'/home';
    
    $scope.loadMore= function(next){
        if($scope.busy)  return;
        $scope.loading = true;
        $scope.busy = true;
       
        var nextalbums = AlbumsFactory.getNextPage( );
        nextalbums.then( function( data ){

            $scope.albums.splice( $scope.albums.length,data.length,data );
        }),function(error){
           console.log("error",error);
           alert(error);
        }
        $scope.busy = false;
    }

  //   $scope.loadAlbums = function(){
		// $scope.albums = AlbumsFactory.getAlbums();
		// // getAlbums.then( function( data ){
		// // 	$scope.albums = data.albums;
		//  	console.log( "getalbums00",$scope.albums );
		// // });	
  //   };
  //   
    $scope.loadAlbums = function(){
        var getAlbums = AlbumsFactory.getNextPage();
        getAlbums.then( function( data ){
            $scope.albums = AlbumsFactory.getAlbums();
            console.log( "getalbums00",$scope.albums );
        });  
    };

   $scope.loadAlbums();

   	
});