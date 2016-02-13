app.directive('fooPage',function( ){
	return {
		restrict: 'E',
		templateUrl: 'app/_foo.html',
		link:function link( scope,element,attrs ){
			// alert(scope);
			// element.append('hello111');
		}
	}
})