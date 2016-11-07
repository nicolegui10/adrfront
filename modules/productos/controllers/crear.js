angular.module('gepro.productos')
    .controller('ProductosCrearController', function ($scope, $http, $location) {

      $scope.producto = {};

      $scope.crear = function () {
        $http({
          method: 'POST',
          url: 'api/productos',
          data: $scope.producto
        }).then(function () {
          $location.path('productos');
        }, function (response) {
          if (response.status === 422) {
            $scope.errors = response.data;
          }
          for (var index in response.data) {
            $scope.errors[index] = response.data[index][0];
            $scope.producto[index] = '';
          }
        });
      }

      $scope.limpiar= function () {
        $scope.errors = undefined;
      }

    });