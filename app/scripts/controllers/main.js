'use strict';

/**
 * @ngdoc function
 * @name rabbitmqDemoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rabbitmqDemoFrontApp
 */
angular.module('rabbitmqDemoFrontApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, control) {
    // attach sendColorToAll and sendClearToAll control to users
    $scope.sendColorToAll = control.sendColorToAll;
    $scope.sendClearToAll = control.sendClearToAll;
    // attach sendColorToSome and sendClearToSome control to users
    $scope.routingKey = '';
    $scope.setRoutingKey = function(value) {
      $scope.routingKey = value;
    };
    $scope.sendColorToSome = control.sendColorToSome;
    $scope.sendClearToSome = control.sendClearToSome;
    // retrieve the users by polling the server
    var httpPolling = function () {
      $timeout(function () {
        $http({method: 'GET', url: 'http://localhost:8080/rabbitmq/users'}).
          success(function (users) {
            // attach sendColorToOne and sendClearToOne control to users
            users.forEach(function(user) {
              user.sendColor = function(color) {
                control.sendColorToOne(user.name, color);
              };
              user.clear = function() {
                control.sendClearToOne(user.name);
              };
            });
            $scope.error = undefined;
            $scope.users = users;
          }).
          error(function () {
            $scope.error = 'Server is down';
            $scope.users = undefined;
          });
        httpPolling();
      }, 2000);
    };
    httpPolling();
  });
