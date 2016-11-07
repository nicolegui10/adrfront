angular.module('gepro.proveedores')
    .controller('ProveedoresEditarController', function ($scope, $http, $location, $routeParams) {

      $scope.editar = function () {
        $http({
          method: 'PATCH',
          url: 'api/proveedores/' + $routeParams.proveedorId,
          data: $scope.proveedor
        }).then(function () {
          $location.path('proveedores');
        });
      }

      $http({
        method: 'GET',
        url: 'api/proveedores/' + $routeParams.proveedorId
      }).then(function (response) {
        $scope.proveedor = response.data;
        $scope.proveedor.provincia = response.data.direccion[0].provincias_id;
      });

      $http({
        method: 'GET',
        url: 'api/provincias'
      }).then(function (response) {
        $scope.provincias = response.data;
      });

    });