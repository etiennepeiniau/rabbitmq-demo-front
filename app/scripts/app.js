'use strict';

/**
 * @ngdoc overview
 * @name rabbitmqDemoFrontApp
 * @description
 * # rabbitmqDemoFrontApp
 *
 * Main module of the application.
 */
angular
  .module('rabbitmqDemoFrontApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
