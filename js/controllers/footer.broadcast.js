(function() {
    angular.module('app')
	    .controller('FooterBroadcast', function($scope,ServisUser){
			$scope.$on('eho:name', function (event, data) {
             $scope.broadcastNameFooter = data;
          });
          ServisUser.broadcast();
	    });
})();