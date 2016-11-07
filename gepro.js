angular.module('gepro', [
  'ngRoute',
  'ngSanitize',
  'ui.select',
  'datePicker',
  'satellizer',
  'gepro.components',
  'gepro.productos',
  'gepro.proveedores',
  'gepro.pedidos',
  'gepro.landing',
  'gepro.auth'
]).config(function ($authProvider, $httpProvider, $provide) {

  function redirectWhenLoggedOut($q, $injector) {

    return {

      responseError: function(rejection) {

        // Need to use $injector.get to bring in $state or else we get
        // a circular dependency error
        var $location = $injector.get('$location');

        // Instead of checking for a status code of 400 which might be used
        // for other reasons in Laravel, we check for the specific rejection
        // reasons to tell us if we need to redirect to the login state
        var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

        // Loop through each rejection reason and redirect to the login
        // state if one is encountered
        angular.forEach(rejectionReasons, function(value, key) {

          if(rejection.data.error === value) {

            // If we get a rejection corresponding to one of the reasons
            // in our array, we know we need to authenticate the user so
            // we can remove the current user from local storage
            localStorage.removeItem('user');

            // Send the user to the auth state so they can login
            $location.path('/login');
          }
        });

        return $q.reject(rejection);
      }
    }
  }

  // Setup for the $httpInterceptor
  $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

  $httpProvider.interceptors.push('redirectWhenLoggedOut');
  $httpProvider.interceptors.push('Authorization');

  $authProvider.loginUrl = '/api/authenticate';
}).run(function ($rootScope, $location) {

  $rootScope.$on('$routeChangeStart', function (event, toState) {

    var user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      $rootScope.authenticated = true;
      $rootScope.currentUser = user;
    }
  });

});