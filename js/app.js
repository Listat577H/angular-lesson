var app = angular.module('appModule',[]);
    app.controller('MainController',['$scope', function ($scope) {
      $scope.arrRows = [];
      $scope.paginations = [];
      $scope.arrSuccess = false;
      $scope.limitRow = 5;
      $scope.numPage = 0;
      $scope.activePage = $scope.numPage;
      $scope.isAllSelected = $scope.arrSuccess;


     
      
      $scope.historyСhange = function(){
        window.localStorage.setItem('KeyList', angular.toJson($scope.arrRows));
      };
      $scope.addRow = function(valRow){
        $scope.arrRows.unshift({'id':$scope.arrRows.length,'name':valRow,'success': $scope.arrSuccess});
        $scope.valRow = '';
        $scope.changeSuccess();
        $scope.numPage = 0;
        $scope.paginationEvent(0);
        $scope.pagination();
        $scope.historyСhange();
      };
      $scope.removeRow = function(index){
        $scope.arrRows.splice(index,1);
        $scope.changeSuccess();
        if(index === 0){
          $scope.numPage = $scope.numPage - $scope.limitRow;
        }
        $scope.changeSuccess();
        $scope.pagination();
        $scope.historyСhange();
      };
      $scope.removeAll = function(){
        $scope.isAllSelected = $scope.arrSuccess;
        $scope.arrRows.splice($scope.numPage,$scope.limitRow);
        if($scope.numPage<=0){
          $scope.numPage = 0;
        }else{
          $scope.numPage = $scope.numPage - $scope.limitRow;
        }
        $scope.changeSuccess();
        $scope.pagination();
        $scope.historyСhange();
      };
      $scope.changeSuccess = function(){
        $scope.isAllSelected = $scope.arrRows.every(function(arrRow){ return arrRow.success; });
      };
      $scope.successAll = function(){
        $scope.isAllSelected = !$scope.isAllSelected;
        angular.forEach($scope.arrRows, function(arrRow){
          arrRow.success = $scope.isAllSelected; 
        });
        $scope.historyСhange();
      };
      $scope.pagination = function(){
        $scope.paginations = [];
        $scope.item = Math.ceil($scope.arrRows.length/$scope.limitRow);
        for(var i=0;i<$scope.item;i++){
          $scope.paginations.push(i);
        }
        $scope.activePage = Math.ceil($scope.numPage/$scope.limitRow);
      };
      $scope.paginationEvent = function(index){
        $scope.activePage = index;
        $scope.numPage = $scope.limitRow*index;
      };
      if(window.localStorage.getItem('KeyList') != undefined){
        $scope.arrRows = JSON.parse(window.localStorage.getItem('KeyList', angular.fromJson($scope.arrRows)));
        $scope.pagination();
        $scope.changeSuccess();
      }
    }]);