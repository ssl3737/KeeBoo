'use strict';

/**
 * @ngdoc function
 * @name keeboo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the keeboo
 */
angular.module('keeboo')
  .controller('HomeCtrl', function ($scope, $http) {

    $scope.myInterval = 3000;
    $scope.slides = [

      {
        image: 'carousel4.jpg'
      },
      {
        image: 'carousel3.jpg'
      },
      {
        image: 'carousel2.jpg'
      },
      {
        image: 'carousel1.jpg'
      },
      {
        image: 'carousel6.jpg'
      }
    ];

    //longest drive
    $scope.labels = ["Sejong", "Soran", "Andrew", "Stuart", "Anthony"];
    $scope.data = [54,12,22,44,56];

    //fetch gas price data from gas.json
    $http.get("data/gas.json").success(function (response) {
      $scope.gas = response.records;
    });

    //hard brakes
    $scope.label = ["0", "30", "40", "50", "60", "70", "80", "90", "100Km/h"];
    $scope.datas = [
      [2, 3, 4, 5, 2, 7, 4, 9, 3],
      [0, 0, 0, 0, 0, 0, 0]
    ];

});
