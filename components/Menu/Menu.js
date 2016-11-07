angular.module('gepro.components', [])
    .directive('geproMenu', function ($auth, $rootScope, $location) {
      return {
        templateUrl: 'components/Menu/Menu.html',
        restrict: 'E',
        scope: true,
        replace: true,
        link: function (scope, element) {

          scope.logout = function() {

            event.preventDefault();
            event.stopPropagation();

            $auth.logout().then(function() {

              localStorage.removeItem('user');

              $rootScope.authenticated = false;
              $rootScope.currentUser = null;

              $location.path('/');

            });
          }

        }
      }
    });
