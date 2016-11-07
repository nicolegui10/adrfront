angular.module('gepro.auth')
    .controller('AuthController', function ($rootScope, $scope, $auth, $http, $location) {

      $scope.loginError = false;
      $scope.loginErrorText;

      if ($rootScope.authenticated) {
        $location.path('/#/');
      }

      $scope.login = function () {

        var credentials = {
          email: $scope.email,
          password: $scope.password
        }

        // Use Satellizer's $auth service to login
        $auth.login(credentials).then(function (data) {

          // If login is successful, redirect to the users state
          return $http.get('api/authenticate/user');

          $location.path('/#/');
        }, function (error) {
          $scope.loginError = true;
          $scope.loginErrorText = error.data.error;
        }).then(function(response) {

          // Stringify the returned data to prepare it
          // to go into local storage
          /*var user = JSON.stringify(response.data.user);

          // Set the stringified user data into local storage
          localStorage.setItem('user', user);

          // The user's authenticated state gets flipped to
          // true so we can now show parts of the UI that rely
          // on the user being logged in
          $rootScope.authenticated = true;

          // Putting the user's data on $rootScope allows
          // us to access it anywhere across the app
          $rootScope.currentUser = response.data.user;

          // Everything worked out so we can now redirect to
          // the users state to view the data
          $location.path('/');*/

        });
      }

    });