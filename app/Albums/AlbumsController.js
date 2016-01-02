
AlbumsModule.controller( 'AlbumsController',function( $location,$log,$scope,AlbumsFactory,GenreFactory,CartFactory){
  $scope.busy = false;
  $scope.albums = [];
  $scope.loading = false;
  $scope.nextalbums = [];
  $scope.headclass = true;
  $scope.showPageTop = $location.path()==='/home';
  var product = '1';
  $scope.buy = !$scope.buy;

  $scope.loadMore= function(next){
      if($scope.busy)  return;
      $scope.loading = true;
      $scope.busy = true;
     
      AlbumsFactory.getNextPage( ).then( function( data ){

      }), function(error){
         alert(error);
      }
      $scope.busy = false;
  }

  $scope.loadAlbums = function(){
    AlbumsFactory.getNextPage().then( function( data ){
        $scope.albums = data;
    });  
  };


  $scope.addToCart = function( albumId ){
    
    if (!$scope.buy) {
      $scope.buy = !$scope.buy;
      CartFactory.addToCart(product,albumId);
    }else{
      $scope.buy = !$scope.buy;
      CartFactory.deleteProduct(albumId);
    }
   
  } 

   $scope.loadAlbums();

});