<!DOCTYPE html>
<html lang="en" ng-app="musicStore">
<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="checkout.css">
</head>
<body ng-controller="mainController">
<!-- _____________________________ -->
<!-- ___________HEADER____________ -->
<!-- _____________________________ -->
	<header>
		<nav>
			<div class="wrapper">
				<ul>
					<a href="index1.html"><li>Home</li></a>
					<a href="#myAcoount" ng-show=""><li>My Account</li></a>
					<a href="#myWishlist"><li>My Wishlist</li></a>
					<a href="check-out-1.html"><li>Checkout</li></a>
					<a href="#" ng-hide="" ><li>Log In</li></a>
				</ul>	
			</div>	
			</nav>
		<div id="nav-header">
			<div class="wrapper">
				<img class="logo" src="Images/logo.png" >
				<div id="find-album">
					<input type="text" class="search" />
				</div>
				<div id="store-status"></div>
			</div>
		</div>
	</header>
	<div class="wrapper">
		<h1 class="check-out-h1">Login or Create an Account</h1>

		<div id="newCostumers" class="regFile">
			<header>NEW COSTUMERS</header>
			<p>By creating an account in our store, you will able to move throught the checkout process faster, store multiple shipping adresses, view and truck your ordersin your account and more.</p>
			<input type="button" class="btn reg" value="Create an Account">
		</div>
		<div id="registrCostumers" class="regFile">
			<header>REGISTERED COSTUMERS</header>
		</div>
	</div>

	</body>
	</html>