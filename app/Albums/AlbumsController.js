
AlbumsModule.controller( 'AlbumsController',function( $location,$log,$scope,AlbumsFactory,GenreFactory,CartFactory,$routeParams){
  $scope.busy = false;
  $scope.albums = [];
  $scope.loading = false;
  $scope.nextalbums = [];
  $scope.headclass = true;
  $scope.showPageTop = $location.path()==='/home';
 // var product = '1';
  

  
  $scope.loadMore= function(next){
      if($scope.busy)  return;
      $scope.loading = true;
      $scope.busy = true;
     
      AlbumsFactory.getNextPage( ).then( function( data ){
      // console.log("nextalbums",nextalbums);
      //$scope.albums.splice( $scope.albums.length, data.length, data );
      }), function(error){
         alert(error);
      }
      $scope.busy = false;
  }

  $scope.loadAlbums = function(){
    AlbumsFactory.getNextPage().then( function( data ){
        console.log('AlbomsController:loadAlbums', data);
        $scope.albums = data;//AlbumsFactory.getAlbums();
    });  
  };


  $scope.addToCart = function( index ){
    var album = AlbumsFactory.getAlbum ( index );
    console.log("albumIdALBUMCONTRL",album);
    console.log("productALBUMCONTRL",product);

    var cart = CartFactory.addToCart(product,album);
  } 
   $scope.loadAlbums();

});