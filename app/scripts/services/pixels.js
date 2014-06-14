'use strict';

var invadePixels = ['#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#2d2d2d',
                    '#428bca','#428bca','#f0ad4e','#428bca','#428bca','#428bca','#428bca','#428bca','#f0ad4e','#428bca','#428bca','#2d2d2d',
                    '#428bca','#428bca','#428bca','#f0ad4e','#428bca','#428bca','#428bca','#f0ad4e','#428bca','#428bca','#428bca','#2d2d2d',
                    '#428bca','#428bca','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#428bca','#428bca','#2d2d2d',
                    '#428bca','#f0ad4e','#f0ad4e','#428bca','#f0ad4e','#f0ad4e','#f0ad4e','#428bca','#f0ad4e','#f0ad4e','#428bca','#2d2d2d',
                    '#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#2d2d2d',
                    '#f0ad4e','#428bca','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#f0ad4e','#428bca','#f0ad4e','#2d2d2d',
                    '#f0ad4e','#428bca','#f0ad4e','#428bca','#428bca','#428bca','#428bca','#428bca','#f0ad4e','#428bca','#f0ad4e','#2d2d2d',
                    '#428bca','#428bca','#428bca','#f0ad4e','#f0ad4e','#428bca','#f0ad4e','#f0ad4e','#428bca','#428bca','#428bca','#2d2d2d',
                    '#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#2d2d2d',
                    '#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#428bca','#2d2d2d'];

/**
 * @ngdoc function
 * @name rabbitmqDemoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rabbitmqDemoFrontApp
 */
angular.module('rabbitmqDemoFrontApp')
  .factory('pixels', function ($timeout, control) {
    return {
      invade: function () {
        control.sendClearToAll();
        var sendPixel = function(i) {
          $timeout(function () {
            control.sendColorToAll(invadePixels[i]);
            if(i < invadePixels.length) {
              sendPixel(i + 1);
            }
          }, 25);
        };
        sendPixel(0);
      }
    };
  });
