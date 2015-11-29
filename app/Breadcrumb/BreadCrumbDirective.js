app.directive('breadCrumb',function($route){
	return {
		restrict: 'E',
		templateUrl: 'app/Breadcrumb/_bread-crumb.html',
        link: function($scope, element, attrs, $route) {
            console.log('$route.current.name', $route.current.name);
            scope.crumbs = [];
        }
    };
});

