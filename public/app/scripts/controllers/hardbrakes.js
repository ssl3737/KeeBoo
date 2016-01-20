'use strict';

/**
 * @ngdoc function
 * @name keeboo.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the keeboo
 */

var app = angular.module('keeboo');

app.controller('HardBrakesCtrl', function ($scope) {

  //hardcode for dropdown list
  $scope.dropdata = {
      repeatSelect: null,
      availableOptions: [
        {id: '1', name: 'Me'},
        {id: '2', name: 'Se'},
        {id: '3', name: 'Stuart'},
        {id: '4', name: 'Antony'},
        {id: '5', name: 'Soran'},
        {id: '6', name: 'Andrew'},
        {id: '7', name: 'Nam'},
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

    //create Random number for hard brake
    var array = [0,0,0,0,0,0,0,0,0];
    var tableList = [];
    var TableNumber = 0;
    function randomData(arrayClient){
      for(var i = 0; i < 9; i++) {
        array[i] = Math.floor( Math.random() * 100 );
      }
      ++TableNumber;
      addTable(array, TableNumber);
    };


function addTable(array, TableNumber) {
  if (TableNumber!= 1) {
    var list = document.getElementById("metric_results");
    //refresh
    list.removeChild(list.childNodes[0]);
  }

    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.border = '1'
    table.appendChild(tableBody);

    var heading = new Array();
    heading = ["0", "30", "40", "50", "60", "70", "80", "90", "100Km/h"]


    var stock = new Array()
    stock[0] = array

    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (var j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}

     //hardcode for line chart
     $scope.labels = ["0", "30", "40", "50", "60", "70", "80", "90", "100Km/h"];
     $scope.series = [arrayClient];
     $scope.data = [array];

     $scope.onClick = function (points, evt) {
       console.log(points, evt);
     };

     //get maximum hard brakes
     $scope.getMax = function() {
       var max = 0;
       for(var i = 0; i < array.length; i++) {
         if (array[i] > max) {
           max = array[i];
         }
       }
       return max;
     }

     //get km with the maximum hard brakes
     $scope.getKM = function() {
       var saveIndex = 0;
       var km = null;

       for(var i = 0; i < array.length; i++) {
         if($scope.getMax() == array[i]) {
           saveIndex = i;
         }
       }

       switch(saveIndex) {
         case 0:
           km = "0 km/h";
           break;
         case 1:
           km = "30 km/h";
           break;
         case 2:
           km = "40 km/h";
           break;
         case 3:
           km = "50 km/h";
           break;
         case 4:
           km = "60 km/h";
           break;
         case 5:
           km = "70 km/h";
           break;
         case 6:
           km = "80 km/h";
           break;
         case 7:
           km = "90 km/h";
           break;
         case 8:
           km = "100 km/h";
           break;
       }
       return km;
     }
});
