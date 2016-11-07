angular.module('gepro.auth', [])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        $routeProvider
            .when('/login', {
              controller: 'AuthController',
              templateUrl: 'modules/auth/views/login.html',
            });
      }]);