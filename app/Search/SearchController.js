SearchModule.controller('searchController', function($scope, $http, $q, $window, SearchFactory) {
     var urlBase = "api/search";
    $scope.searchitems=false;
    $scope.items = [];
    $scope.searchString = "";
    $scope.loading=false;
    
  
  $scope.search =function(searchString){
    $http.get(urlBase+"/:"+ $scope.searchString).success(function(data, status, headers, config) {
          $scope.items = data.result.album;
          $scope.searchitems=true;
      }).error(function(data, status, headers, config) {
          console.log("No data found..");
    });

    $scope.hideshearch = function(){
      $scope.searchitems=false;
    }; 
       
  }


  // $scope.$watch('searchString', function( searchString ){
  //   console.log(SearchFactory.searchAlbum( searchString ));
  //   var count = searchString.length;
    
  //   if ( count >= 3 ) {
  //      SearchFactory.searchAlbum( searchString )
  //     .success( function( response ){
  //        console.log("res",response);
  //       // angular.forEach(response , function( each_result ){
  //       // console.log(each_result);
  //       // $scope.items.push(each_result);
  //       //   return;
  //         // });
  //         }),
  //          function(error){
  //          return error;
  //         }
  //   } else{
  //     return;
  //   }
  // return;
  // });

  //     init();
  //    }]); 
  //   })();

});


