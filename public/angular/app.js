var app=angular.module("MainApp",["ngRoute","Maincontrollers"]);

app.config(Route);

function Route($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '/views/home.html'
	})
	.when('/login',{
		
		templateUrl:'/views/login.html'
	})/*.when("/registro",{

		
		templateUrl:"../Registro.html"
	})*/.when('/productos',{
		controller: "ProductsController",
		templateUrl:'/views/products.html'
	}).when("/carrito",{
		controller: 'carritoCtrl',
		templateUrl: "/views/carrito.html"

		/*resolve: {
			"check": function($location,$rootScope){
				if(!$rootScope.logged){
					$location.patch("/");
				}
			}
			
		},
		templateUrl: "../carrito.html"
	})*/}).otherwise({
		redirectTo: '/'
	});
};


