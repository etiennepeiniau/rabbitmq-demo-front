'use strict';

/**
 * @ngdoc function
 * @name rabbitmqDemoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rabbitmqDemoFrontApp
 */
angular.module('rabbitmqDemoFrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
