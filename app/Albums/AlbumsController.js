
AlbumsModule.controller( 'AlbumsController',function( $location,$log,$scope,$rootScope,AlbumsFactory,GenreFactory,CartFactory){
  $scope.busy = false;
  $scope.albums = [];
  $scope.loading = false;
  $scope.nextalbums = [];
  $scope.headclass = true;
  $scope.showPageTop = $location.path()==='/home';
  var product = '1';
  $scope.buy = !$scope.buy;

  $scope.loadMore = function(next){
      console.log('zzz:loadMore');
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


  $scope.addToCart = function( album ){
    album.buy = !!!album.buy;
    console.log("!!!",!!!album.buy);
    if ( album.buy ) {
      console.log("buy!!!",album.buy);
      CartFactory.addToCart(product,album.album_id);
    }else{
      CartFactory.deleteProduct(album.album_id);
    }
   
  } 

  $scope.setInfo = function( album ){
   $scope.info = false;
    album.info = !!!album.info; 
    console.log( " album.info ",album );
    // if (album.info.indexOf($scope.description) !=-1) {};  
      
      if ( album.info ) { 
        $scope.description = album.album_description;
          console.log("info responce",album);
      }else{
        $scope.info = false;
         $scope.description = !album.album_description;
      }
  }

   $scope.loadAlbums();

});