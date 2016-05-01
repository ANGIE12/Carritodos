var controllers=angular.module("Maincontrollers",["MainServices"]);


controllers
.controller("ProductsController",operaciones)
.controller("carritoCtrl",Carrito)
.controller("loginCtrl",configlogin)
.controller("RegisterCtrl",configregister);




function operaciones ($scope,$http,ShopSesion) {
  $scope.productos= [];

  $scope.tenis = [{

  }];
  $scope.camisas = [{

  }];

  $scope.busos = [];

 
  $http.get('/products').success(function(data) {
    $scope.productos = data;

  }).error(function(data) {
    console.log('Error: ' + data);
  });


  $http.get('/products/type/2').success(function(data) {
    $scope.camisas = data;
  }).error(function(data) {
    console.log('Error: ' + data);
  });

  $http.get('/products/type/1').success(function(data) {
    $scope.tenis = data;
  }).error(function(data) {
    console.log('Error: ' + data);
  });


  this.tab = 0;

  this.setTab = function(newValue){
    this.tab = newValue;
  };

  this.isSet = function(tabName){
    return this.tab === tabName;
  };



  $scope.ordenarPor=function(orden){
    $scope.ordenSeleccionado=orden;
  }


  $scope.add = function(producto) {
    ShopSesion.add(producto);
  }



  $scope.review={};
  $scope.formVisibility=false;

  $scope.addReview = function(producto){

    producto.reviews.push($scope.review);

    $scopereview= {};
    $scope.formVisibility=false;
  }



  $scope.Showform=function(){
    $scope.formVisibility=true;
  }



$scope.Likeclicked=[];
$scope.Dislikeclicked=[];

  $scope.Likes = function (producto){
    if(!$scope.Likeclicked[producto]){
      producto.Like=producto.Like+1;
      $scope.Likeclicked[producto]=true;
      }
      if($scope.Dislikeclicked[producto]==true){
            producto.Dislike=producto.Dislike-1;
        $scope.Dislikeclicked[producto]=false;
      }
    
 /* $http.put('/products/updateQuality/'+producto.Nombre).send({
    "Like": producto.Like,
  }).success(function(data) {
   
  }).error(function(data) {
    console.log('Error: ' + data);
  });*/

    }

$scope.Dislikes = function(producto){
 if(!$scope.Dislikeclicked[producto]){
   producto.Dislike=producto.Dislike+1;
   $scope.Dislikeclicked[producto]=true;
 }
   if($scope.Likeclicked[producto]==true){
      producto.Like=producto.Like-1;
       $scope.Likeclicked[producto]=false;
    }

$http
 //METODO QUE GUARDA E BASE DE DATOS ACA!
}


  $scope.filtrarPor=function(orden){
    $scope.filtroSeleccionado=orden;
  }

}



function Carrito($scope,ShopSesion){

 

  $scope.newproducts=ShopSesion.getProducts();
  console.log("dasd");

  $scope.borrar= function(producto){
    var i;
    var len= $scope.newproducts.length;
    for(i=0; i < len;i++){
      if($scope.newproducts[i].Nombre===producto.Nombre){
        $scope.newproducts.splice(i,1);
        return ;
      }
    }

  }

//Aqui va algo

}




function configlogin($scope,$location,$rootScope){
  $scope.submit= function(){

    if($scope.username == $scope.usuario.user && $scope.password == $scope.usuario.pass){
      $rootScope.logged =true;
      $location.path("/carrito");
    }else {
      alert("INFO INCORRECTA ");
    }
  }
}




function configregister()
{


}