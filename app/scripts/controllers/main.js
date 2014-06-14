/*global $ */
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
          success(function (users) {
            users.forEach(function(user) {
              user.sendColor = function(color) {
                var data = { userName: user.name, color: color };
                $http({
                  method: 'POST',
                  url: 'http://localhost:8080/rabbitmq/users/color/one',
                  data    : $.param(data),
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
              };
              user.clear = function() {
                var data = { userName: user.name };
                $http({
                  method: 'POST',
                  url: 'http://localhost:8080/rabbitmq/users/clear/one',
                  data    : $.param(data),
                  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
              }
            });
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
