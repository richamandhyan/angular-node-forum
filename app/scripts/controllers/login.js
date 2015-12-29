'use strict';

/**
 * @ngdoc function
 * @name vrsForumUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vrsForumUiApp
 */
  angular.module('vrsForumUiApp')
  .controller('LoginCtrl', ['$scope', 'LoginService', function ($scope, loginService) {
  	$scope.login = function ($event) {
  		$event.preventDefault();
  		console.log($scope.params);
  		loginService.doLogin($scope.params);
  	}
  }]);
 
