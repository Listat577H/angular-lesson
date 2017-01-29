var app = angular.module('appModule',[]);
    app.controller('MainController',['$scope', function ($scope) {
      $scope.table = [
        {name: "Рис",status: "Есть"},
        {name: "Гречка",status: "Нет"},
        {name: "Конопля",status: "Есть"},
        {name: "Пшеница",status: "Нет"},
        {name: "Ячьмень",status: "Есть"}
      ]
      $scope.isActive = false;
      $scope.toggleActive = function(){
        $scope.isActive = !$scope.isActive;
      }
    }]);