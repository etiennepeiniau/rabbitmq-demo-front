'use strict';

/**
 * @ngdoc function
 * @name rabbitmqDemoFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rabbitmqDemoFrontApp
 */
angular.module('rabbitmqDemoFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
