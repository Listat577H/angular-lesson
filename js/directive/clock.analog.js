(function() {
    angular
        .module('appClockAnalog',[])
        .directive('clockAnalog', function() {
            return {
	           template: '<h1>{{time}}<h1>',
	           controller: function ($scope, $interval, $filter) {
	                var format = 'dd:MM:y hh:mm:ss';
	        		var timezone = '+02';
	        		var datenew =  new Date();
	        		function newDate(){
	        			 $scope.time = $filter('date')(datenew, format, timezone);
	        		}
	        		newDate();
	        		$interval(function(){
	        			datenew =  new Date();
	        			newDate();
	        		},1000);
        		}
	        }
        });
})();