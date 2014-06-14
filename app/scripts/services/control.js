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
  .factory('control', function ($http) {
    return {
      sendColorToAll: function (color) {
        var data = { color: color };
        $http({
          method: 'POST',
          url: 'http://localhost:8080/rabbitmq/users/color/all',
          data: $.param(data),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
      },
      sendClearToAll: function () {
        $http({
          method: 'POST',
          url: 'http://localhost:8080/rabbitmq/users/clear/all'
        });
      },
      sendColorToOne: function (userName, color) {
        var data = { userName: userName, color: color };
        $http({
          method: 'POST',
          url: 'http://localhost:8080/rabbitmq/users/color/one',
          data: $.param(data),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
      },
      sendClearToOne: function (userName) {
        var data = { userName: userName };
        $http({
          method: 'POST',
          url: 'http://localhost:8080/rabbitmq/users/clear/one',
          data: $.param(data),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
      }
    };
  });
