angular.module('gepro.pedidos', [])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        $routeProvider
            .when('/pedidos', {
              controller: 'PedidosListarController',
              templateUrl: 'modules/pedidos/views/listar.html',
            })
            .when('/pedidos/crear', {
              controller: 'PedidosCrearController',
              templateUrl: 'modules/pedidos/views/crear.html',
            })
            .when('/pedidos/:pedidoId', {
              controller: 'PedidosVerController',
              templateUrl: 'modules/pedidos/views/ver.html',
            });
      }]);