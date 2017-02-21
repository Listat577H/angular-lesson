(function() {
    angular
        .module('appClockMechanic',[])
        .directive('clockMechanic', function($interval) {
        	return {
			    templateUrl: 'js/directive/clock.mechanic.html',
			    controller: function ($scope,$interval) {
	        		var datenew =  new Date();
	        		var seconds =  datenew.getSeconds();
	        		var minutes =  datenew.getMinutes();
	        		var hours =  datenew.getHours();

	        		function newDate(){
	        			$scope.hours = Math.floor(hours-12)* 30;
	        			$scope.minutes = Math.floor(minutes * 6);
	        			$scope.seconds = Math.floor(seconds * 6);
	        		}
	        		newDate();
	        		$interval(function(){
	        			datenew =  new Date();
		        		seconds =  datenew.getSeconds();
		        		minutes =  datenew.getMinutes();
		        		hours =  datenew.getHours();
	        			newDate();
	        		},1000);
        		}
			  };
        });
})();