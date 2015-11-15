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
			<input type="button" id="createAccount" ng-click="" class="btn reg" value="Create an Account">
		</div>
		<div id="registrCostumers" class="regFile">
			<header>REGISTERED COSTUMERS</header>
			<p>If you have an account with us, please log in.</p>
			
			<label for="email">Email Address<span>*</span></label>
			<input type="email" name="email" id="email">

			<label for="pass">Password<span>*</span></label>
			<input type="password" name="pass" id="pass">

			<input type="button" value="Login" id="loginBtn"  class="btn log">
		</div>
		<div id="registr">
			<h2>Registration <p>X</p></h2>

			<label>Profile Informations</label>
			<input type="text" name="firstName" id="firstName" placeholder="First Name">
			<input type="text" name="lastName" id="lastName" placeholder="Last Name">

			<label>Login Datas</label>
			<input type="email" name="email" id="email" placeholder="E-mail adress">				
			<input type="pass" name="pass" id="pass" placeholder="Password">
			<input type="pass" name="pass" id="pass" placeholder="Password confirmation">

			<input type="button" value="Register" id="regBtn"  class="btn reg">
		</div>
	</div>


	</body>
	</html>