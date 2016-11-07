angular.module('gepro.productos', [])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        $routeProvider
            .when('/productos', {
              controller: 'ProductosListarController',
              templateUrl: 'modules/productos/views/listar.html',
            })
            .when('/productos/crear', {
              controller: 'ProductosCrearController',
              templateUrl: 'modules/productos/views/crear.html',
            })
            .when('/productos/:productoId/editar', {
              controller: 'ProductosEditarController',
              templateUrl: 'modules/productos/views/editar.html',
            });
      }]);