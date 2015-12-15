SearchModule.factory('SearchFactory',function($log,$http,$q) {
	 var SearchFactory={};
 	 var albums = [];
 	 var urlBase = "api/search";
 	 var promise= null;

	 SearchFactory.searchAlbum = function( searchString ){
		console.log( "searchString",searchString );
		return promise = $http.get( urlBase+"/:"+searchString )
	    .then(function( data ) {    	
           albums = data.data.result.album;
           console.log( "searchStringdata",albums );
           return albums;
        }),
        function(msg, code) {
            $log.error(msg, code);
		    return msg;
            console.log("No data found..");
	    }
	}
	return SearchFactory;
});