var UserModule = angular.module('User',['Cart']);
var AlbumsModule = angular.module('Albums',['Genre','Cart']);
var CartModule = angular.module('Cart',['Albums','User']);
var GenreModule = angular.module('Genre',['Albums']);