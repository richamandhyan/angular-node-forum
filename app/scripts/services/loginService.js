'use strict';

angular.module('vrsForumUiApp').service('LoginService', 
	['$http', '$rootScope', '$location', 
	function ($http, $rootScope, $location) {
		$rootScope.authToken = null;

		this.doLogin = function (params) {
			console.log(params);
			$http.post('http://localhost:3000/login', params)
			.then(function(response) {
				console.log(response);
				if (response.data && response.data.data) {
					$rootScope.authToken = response.data.data.token;
					$rootScope.userId = response.data.data.userId;
					$location.path('/topic');
				}
			}, function(response) {
				//console.log(response);
			});
		};
		this.doLogout = function () {
			$http.delete('http://localhost:3000/logout', null)
			.then(function (response) {
				if (response.data && response.data.data) {
					$rootScope.authToken = null;
					$rootScope.userId = null;
					$location.path('/logout');
				}
			})
		};
		$rootScope.doLogout = this.doLogout;
		return this;
	}]);