angular.module('gepro.proveedores', [])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        $routeProvider
            .when('/proveedores', {
              controller: 'ProveedoresListarController',
              templateUrl: 'modules/proveedores/views/listar.html',
            })
            .when('/proveedores/crear', {
              controller: 'ProveedoresCrearController',
              templateUrl: 'modules/proveedores/views/crear.html',
            })
            .when('/proveedores/:proveedorId/editar', {
              controller: 'ProveedoresEditarController',
              templateUrl: 'modules/proveedores/views/editar.html',
            });
      }]);