angular.module('gepro.landing', [])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        $routeProvider
            .when('/', {
              controller: 'LandingController',
              templateUrl: 'modules/landing/views/landing.html'
            })
            .otherwise({
              redirectTo: '/'
            });
      }]);