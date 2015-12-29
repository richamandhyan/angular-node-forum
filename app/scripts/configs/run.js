'use strict';

angular.module('vrsForumUiApp')
.run(['$rootScope', '$location',
    function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      console.log('Location change');
      if ($rootScope.authToken == null) {
         $location.path('/login');
      }
    });
  }]);