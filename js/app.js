var app = angular.module('appModule',[]);
    app.controller('MainController',['$scope', function ($scope) {
      $scope.arrRows = [];
      $scope.paginations = [];
      $scope.arrSuccess = false;
      $scope.limitRow = 5;
      $scope.numPage = 0;
      $scope.filterName = NaN;
      $scope.flag = false;
      $scope.activePage = $scope.numPage;
      $scope.isAllSelected = $scope.arrSuccess;
      $scope.selectsArr = [
          {'name':'5 строк','value':5},
          {'name':'10 строк','value':10},
          {'name':'15 строк','value':15},
          {'name':'20 строк','value':20},
          {'name':'Все','value':NaN}
        ];
      
     
      
      $scope.historyСhange = function(){
        window.localStorage.setItem('KeyList', angular.toJson($scope.arrRows));
        window.localStorage.setItem('Limit', $scope.limitRow);
      };
      $scope.isSortUp = function(sortName){
        return $scope.phonesSort === sortName && $scope.reverse;
      }
      $scope.isSortDown = function(sortName){
        return $scope.phonesSort === sortName && !$scope.reverse;
      }
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
        if($scope.activePage != $scope.activePage){
           $scope.activePage = 0;
        }
        if($scope.item == $scope.activePage){
          $scope.activePage--;
        }
        $scope.numPage = $scope.activePage*$scope.limitRow;
        $scope.historyСhange();
      };
      $scope.paginationEvent = function(index){
        $scope.activePage = index;
        $scope.numPage = $scope.limitRow*index;
      };
      $scope.filterArr = function(name){
        if($scope.filterName !=name){
          $scope.filterName = name;
          $scope.reverse = false;
          $scope.flag = false;
        }
        if(!$scope.flag){
            $scope.arrRows.reverse();
            $scope.reverse = !$scope.reverse;
            if(!$scope.reverse){
              $scope.flag = true;
            }
          }else{
            $scope.filterName = !$scope.filterName;
            $scope.flag = false;
          }
      }
      if(window.localStorage.getItem('KeyList') != undefined){
        $scope.limitRow = parseInt(window.localStorage.getItem('Limit', $scope.limitRow));
        $scope.arrRows = JSON.parse(window.localStorage.getItem('KeyList', angular.fromJson($scope.arrRows)));
        $scope.pagination();
        $scope.changeSuccess();
      }
    }]);