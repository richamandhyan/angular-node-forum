'use strict';

/**
 * @ngdoc overview
 * @name vrsForumUiApp
 * @description
 * # vrsForumUiApp
 *
 * Main module of the application.
 */
angular
  .module('vrsForumUiApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/topic', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      //delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $httpProvider.interceptors.push(['$rootScope', function ($rootScope) {
        return {
          request: function (config) {
            console.log(config);
            if (config && config.url.indexOf('http://') > -1) {
              //config.headers['Content-Type'] = 'text/html; charset=utf-8';
              config.headers['Content-Type'] = 'application/json';
              if ($rootScope.authToken) {
                config.headers['token'] = $rootScope.authToken;
              }
            }
            return config;
          },
          response: function (response) {
            console.log(response);
            return response;
          }
        };
      }]);
  });