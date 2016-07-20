var app = angular.module('myApp',[]);
var API_KEY = "Insert you API. Yuo should create your account inside http://openweathermap.org/api";

app.controller('myCtrl', function($scope, $http) {
    $scope.showEvent = false;
  $scope.sendJson = function(){
    $scope.showEvent = true;
    $scope.nameCity = $scope.weather.nameInput;
    $scope.nameCountry = $scope.weather.countryInput;
    $http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.nameCity+","+$scope.nameCountry+"&APPID="+API_KEY)
    .then(function (response) {
          $scope.myData = response.data;
      });
  };
});
