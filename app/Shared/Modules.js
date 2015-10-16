var UserModule = angular.module('User',[]);
var AlbumsModule = angular.module('Albums',['User']);
var CartModule = angular.module('Cart',['Albums','User']);
var GenreModule = angular.module('Genre',['Albums','User'])