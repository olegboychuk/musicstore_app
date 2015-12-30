var UserModule   = angular.module('User',['Cart','Albums','Genre']);
var AlbumsModule = angular.module('Albums',['Genre','Cart']);
var CartModule   = angular.module('Cart',['Albums','User']);
var GenreModule  = angular.module('Genre',['Albums']);
var BreadCrumbModule  = angular.module('BreadCrumb',['Genre', 'Albums']);
// var LoginModule  = angular.module('Login',[]);
var SearchModule = angular.module('Search',['Albums','Genre']);