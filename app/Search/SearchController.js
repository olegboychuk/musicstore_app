SearchModule.controller('searchController', function($scope, $http, $q, $window) {
    var urlBase = "api/search";
    $scope.searchitems=false;
    $scope.items = [];
    $scope.searchString = "";
    $scope.loading=false;
    
    console.log("$scope.searchString",$scope.searchString);
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
//how to close search window after select product

});


