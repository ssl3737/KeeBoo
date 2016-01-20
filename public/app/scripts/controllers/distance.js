'use strict';

/**
 * @ngdoc function
 * @name keeboo.controller:LongestdriveCtrl
 * @description
 * # LongestdriveCtrl
 * Controller of the keeboo
 */
angular.module('keeboo')
  .controller('DistanceCtrl', ['$scope', function ($scope) {

    //hardcode for dropdown list
    $scope.dropdata = {
        repeatSelect: null,
        availableOptions: [
          {id: '1', date: '2015-11-14'},
          {id: '2', date: '2015-11-15'},
          {id: '3', date: '2015-11-16'},
          {id: '4', date: '2015-11-17'},
          {id: '5', date: '2015-11-18'}
        ],
       };

      //var select_name = document.getElementById("repeatSelect");
      var arrayClient = [];
      $('#repeatSelect').change(function(){
        var selectedClient = $(this).val();
        //reset array list to display only a selected client
        arrayClient.length = 0;
        arrayClient.push(selectedClient);
        randomData(arrayClient);
      })

      //create Random number for Longest Drive
      var array = [0,0,0,0,0];

      function randomData(arrayClient) {
        for(var i = 0; i < 5; i++) {
          array[i] = Math.floor( Math.random() * 100 );
        }
      }

       //hardcode for bar chart
       $scope.labels = ["Me","Andrew","Se","Stuart","Antony","Soran"];
       $scope.series = [arrayClient];
       $scope.data = [array];
       $scope.colours = [{
                          "fillColor": "rgba(224, 108, 112, 1)",
                          "strokeColor": "rgba(207,100,103,1)",
                          "pointColor": "rgba(220,220,220,1)",
                          "pointStrokeColor": "#fff",
                          "pointHighlightFill": "#fff",
                          "pointHighlightStroke": "rgba(151,187,205,0.8)"
                      }];

      //get maximum distance
      $scope.getMax = function() {
        var max = 0;
        for(var i = 0; i < array.length; i++) {
          if (array[i] > max) {
            max = array[i];
          }
        }
        return max;
      }

      //get name with the maximum distance
      $scope.getName = function() {
        var saveIndex = 0;
        var name = null;

        for(var i = 0; i < array.length; i++) {
          if($scope.getMax() == array[i]) {
            saveIndex = i;
          }
        }

        switch(saveIndex) {
          case 0:
            name = "Me";
            break;
          case 1:
            name = "Andrew";
            break;
          case 2:
            name = "Se";
            break;
          case 3:
            name = "Stuart";
            break;
          case 4:
            name = "Anthony";
            break;
          case 5:
            name = "Soran";
            break;
        }
        return name;
      }

}]);
