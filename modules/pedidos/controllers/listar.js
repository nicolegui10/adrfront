angular.module('gepro.pedidos')
    .controller('PedidosListarController', function ($scope, $http, $timeout) {

      var init = function () {
        /*$http({
          method: 'GET',
          url: 'api/pedidos'
        }).then(function (response) {
          $scope.pedidos = response.data;
        });*/
        $scope.pedidos = 
[  
   {  
      "id":"1",
      "fecha_creacion":"2016-11-02T00:00:00Z",
      "descripcion":"Compra de insumos para Empleado #123 para setear estacion de trabajo nueva.",
      "importe":"5800",
      "external_id":"4444-33333-11111",
      "estado": "Realizado",
      "fecha_entrega": "",
      "proveedor":
    {  
      "id":"1",
      "razon_social":"DELL",
      "cuit":"30123456782",
      "email":"info@dell.com",
      "telefono":"0115570202"
      }
   }
]
      };

      init();

    });