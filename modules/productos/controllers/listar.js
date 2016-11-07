angular.module('gepro.productos')
    .controller('ProductosListarController', function ($scope, $http, $timeout) {

      var init = function () {
        /*$http({
          method: 'GET',
          url: 'api/productos'
        }).then(function (response) {
          $scope.productos = response.data;
        });*/
        $scope.productos =
[  
   {  
      "id":"1",
      "descripcion":"RACK XQEW123",
      "marca":"DELL",
      "modelo":"2012",
      "precio":"2000"
   },
   {  
      "id":"2",
      "descripcion":"MEMORIA RAM 4GB",
      "marca":"GG",
      "modelo":"2014",
      "precio":"700"
   },
   {  
      "id":"3",
      "descripcion":"MONITOR 21''",
      "marca":"ASUS",
      "modelo":"2016",
      "precio":"1200"
   }
]
      };

      $scope.eliminar = function (id) {
        $http({
          method: 'DELETE',
          url: 'api/productos/' + id
        }).then(function (response) {
          init();
        }, function () {
          $scope.deleteError = true;
          $timeout(function () {
            $scope.deleteError = false;
          }, 5000);
        });
      };

      init();

    });