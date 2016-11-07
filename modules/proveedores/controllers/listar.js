angular.module('gepro.proveedores')
    .controller('ProveedoresListarController', function ($scope, $http, $timeout) {

      var init = function () {
        /*$http({
          method: 'GET',
          url: 'api/proveedores'
        }).then(function (response) {
          $scope.proveedores = response.data;
        });*/
        $scope.proveedores =                         [  
                 {  
                    "id":"1",
                    "razon_social":"DELL",
                    "cuit":"30123456782",
                    "email":"info@dell.com",
                    "telefono":"0115570202"
                 },
                 {  
                    "id":"2",
                    "razon_social":"ASUS",
                    "cuit":"2012345678",
                    "email":"info@asus.com",
                    "telefono":"0115123344"
                 },
                 {  
                    "id":"3",
                    "razon_social":"INTEL",
                    "cuit":"40998877661",
                    "email":"info@intel.com",
                    "telefono":"0115667722"
                 }
              ]
      };

      $scope.eliminar = function (id) {
        $http({
          method: 'DELETE',
          url: 'api/proveedores/' + id
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