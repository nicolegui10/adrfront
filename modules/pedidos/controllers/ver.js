angular.module('gepro.pedidos')
    .controller('PedidosVerController', function ($scope, $http, $routeParams) {

      /*$http({
        method: 'GET',
        url: 'api/pedidos/' + $routeParams.compraId
      }).then(function (response) {
        $scope.pedido = response.data;
      });*/

      $scope.pedido = {  
      "id":"1",
      "fecha_creacion":"2016-11-02T00:00:00Z",
      "descripcion":"Compra de insumos para Empleado #123 para setear estacion de trabajo nueva.",
      "importe":"5800",
      "external_id":"4444-33333-11111",
      "estado": "Realizado",
      "fecha_entrega": "",
      "proveedor": {  
	      "id":"1",
	      "razon_social":"DELL",
	      "cuit":"30123456782",
	      "email":"info@dell.com",
	      "telefono":"0115570202"
      },
       "productos": [
       {  
	      "id":"1",
	      "descripcion":"RACK XQEW123",
	      "marca":"DELL",
	      "modelo":"2012",
	      "precio":"2000",
	      "cantidad": "1"
	   },
   	   {  
	      "id":"2",
	      "descripcion":"MEMORIA RAM 4GB",
	      "marca":"GG",
	      "modelo":"2014",
	      "precio":"700",
	      "cantidad": "2"
	   },
	   {  
	      "id":"3",
	      "descripcion":"MONITOR 21''",
	      "marca":"ASUS",
	      "modelo":"2016",
	      "precio":"1200",
	      "cantidad": "2"
	   }]
   }



    });