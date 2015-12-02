SearchModule.controller('searchController', function($scope, $http, $q, $window) {
    var urlBase = "api/search";
    $scope.mySearch = "";
    
    $scope.mySearchCallback = function(params) {
      console.log("params",params.query);
      var defer = $q.defer();

      $http.get(urlBase + "/:"+params.query)
      .success(function(response) {
         console.log("response",response);
        defer.resolve(response);
      });
        
      return defer.promise;
    };
});

function callback(response, status) {
  console.log(status);
};