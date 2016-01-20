'use strict';

/**
 * @ngdoc function
 * @name keeboo.controller:FuelCtrl
 * @description
 * # FuelCtrlW
 * Controller of the keeboo
 */

var app = angular.module('keeboo');

app.controller('FuelCtrl', function ($scope) {

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

    $('#repeatSelect').change(function(){
      run();
    })
    $('#myDate').change(function () {
      run();
    })


    //var select_name = document.getElementById("repeatSelect");
    var arrayClient = [];
    var count=0;
    function run(){
        var dateString = $('#myDate').val();
        var selectedClient = $('#repeatSelect').val();
        arrayClient.length = 0;
        arrayClient.push(selectedClient);

        if(dateString != "" && arrayClient[0] != "? object:null ?"){
          //reset array list to display only a selected client


          var getMonth = $('#getMonth').val();
          var getYear = $('#getYear').val();
          var lastDay = new Date(getYear, getMonth + 1, 0);
          var date = lastDay.getDate();
          randomData(arrayClient, date);
          count++;
        }
    }

    var getMonth = $('#getMonth').val();
    var getYear = $('#getYear').val();
    var lastDay = new Date(getYear, getMonth + 1, 0);
    var date = lastDay.getDate();

    var array = [];
    var tableList = [];
    var TableNumber = 0;

    for(var i = 1; i <= date; i++) {
      array.push(0);
    }

    function randomData(arrayClient, date){
      //create Random number for hard brake
      for(var i = 1; i <= date; i++) {
        array[i] = Math.floor( Math.random() * 20 );
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

    var getMonth = $('#getMonth').val();
    var getYear = $('#getYear').val();
    var lastDay = new Date(getYear, getMonth + 1, 0);
    var date = lastDay.getDate();

    var heading = new Array();
    heading = [];
    for (var i = 1; i <= date; i++){

      heading.push(i);
    }
}
     //hardcode for line chart
     $scope.labels = [];
    // $scope.labes.push(1);
    var getMonth = $('#getMonth').val();
    var getYear = $('#getYear').val();
    var lastDay = new Date(getYear, getMonth + 1, 0);
    var date = lastDay.getDate();
     for (var i = 1; i <= date; i++){
       $scope.labels.push(i);
     }

    // alert(firstDay + " and " + lastDay);

     $scope.series = [arrayClient];
     $scope.data = [array];

     $scope.onClick = function (points, evt) {
       console.log(points, evt);
     };

     //get total fuel
     $scope.getTotal = function( ){
        var total = 0;
        for(var i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total;
     }

     //get average of fuel
     $scope.getAverage = function() {
        var average = 0;
        average =  $scope.getTotal() / date;
        return average;
     }

});
