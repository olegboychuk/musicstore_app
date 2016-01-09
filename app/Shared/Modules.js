var UserModule   = angular.module('User',['Cart','Albums','Genre']);
var AlbumsModule = angular.module('Albums',['Genre','Cart']);
var CartModule   = angular.module('Cart',['Albums','User']);
var GenreModule  = angular.module('Genre',['Albums']);
var SearchModule = angular.module('Search',['Albums','Genre']);