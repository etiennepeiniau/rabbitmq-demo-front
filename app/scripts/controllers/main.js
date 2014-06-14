'use strict';

/**
 * @ngdoc function
 * @name rabbitmqDemoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rabbitmqDemoFrontApp
 */
angular.module('rabbitmqDemoFrontApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    var httpPolling = function () {
      $timeout(function () {
        $http({method: 'GET', url: 'http://localhost:8080/rabbitmq/users'}).
          success(function (data) {
            $scope.users = data;
          }).
          error(function () {
            $scope.error = 'Server is down';
          });
        httpPolling();
      }, 2000);
    };
    httpPolling();
  });
