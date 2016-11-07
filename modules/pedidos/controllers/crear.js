angular.module('gepro.pedidos')
    .controller('PedidosCrearController', function ($scope, $http, $location) {

      $scope.pedido = {};

      var init = function () {
        $scope.lineaProducto = {};
        $scope.lineasProducto = [];
        $scope.idLineasProducto = [];

        $http({
          method: 'GET',
          url: 'api/productos'
        }).then(function (response) {
          $scope.productos = response.data;
        });

        $http({
          method: 'GET',
          url: 'api/proveedores'
        }).then(function (response) {
          $scope.proveedores = response.data;
        });
      };

      $scope.crear = function () {
        $scope.pedido.productos = $scope.lineasProducto;
        $http({
          method: 'POST',
          url: 'api/pedidos',
          data: $scope.pedido
        }).then(function () {
          $location.path('pedidos');
        });
      }

      function updateTotal() {
        $scope.total = 0;
        $scope.lineasProducto.forEach(function (linea) {
          $scope.total += linea.precio * linea.cantidad;
        })
      };

      $scope.getDescripcionById = function (id) {
        return $scope.productos.filter(function (producto) {
          return producto.id === id;
        })[0].descripcion;
      };

      $scope.agregar = function () {
        $scope.lineasProducto.push(angular.copy($scope.lineaProducto));
        $scope.idLineasProducto.push($scope.lineaProducto.id);

        $scope.lineaProducto = {};

        $scope.form.producto.$setPristine();
        $scope.form.precio.$setPristine();
        $scope.form.cantidad.$setPristine();

        updateTotal();
      };

      $scope.borrar = function (id) {
        $scope.lineasProducto = $scope.lineasProducto.filter(function (linea) {
          return linea.id !== id;
        });
        $scope.idLineasProducto.splice($scope.idLineasProducto.indexOf(id), 1);
        updateTotal();
      };

      $scope.sumar = function (id) {
        $scope.lineasProducto.forEach(function (linea) {
          if (linea.id === id) {
            linea.cantidad++;
          }
        });
        updateTotal();
      };

      $scope.restar = function (id) {
        $scope.lineasProducto.forEach(function (linea) {
          if (linea.id === id && linea.cantidad > 1) {
            linea.cantidad--;
          }
        });
        updateTotal();
      };

      init();

    });