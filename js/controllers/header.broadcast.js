(function() {
    angular.module('app')
        .controller('HeaderBroadcast', function($scope,ServisUser){
          var stopEvent = true;
          $scope.$on('eho:name', function (event, data) {
            if(stopEvent === true){
                $scope.broadcastNameHeader = data;
            }
          });
          ServisUser.broadcast();
          $scope.broadcastName = function(){
            ServisUser.broadcast();
          }
          $scope.stopBroadcastName = function(){
            stopEvent = false;
          }
        });
})();