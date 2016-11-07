angular.module('gepro.proveedores')
    .controller('ProveedoresCrearController', function ($scope, $http, $location) {

      $scope.proveedor = {};

      var init = function () {
        $http({
          method: 'GET',
          url: 'api/provincias'
        }).then(function (response) {
          $scope.provincias = response.data;
        });
      };

      $scope.crear = function () {
        $http({
          method: 'POST',
          url: 'api/proveedores',
          data: $scope.proveedor
        }).then(function () {
          $location.path('proveedores');
        });
      };

      init();
    });