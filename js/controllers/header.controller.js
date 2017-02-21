(function() {
    angular
        .module('app')
        .controller('HeaderController', function($scope, User, helpers) {

            $scope.userName = User.name;

            function updateNameInScope(newName) {
                $scope.userName = newName;
            }
            
            User.registerCallback(updateNameInScope);

            var names = ['Пылып', 'Петро', 'Иннокентий', 'Береза', 'Василий'];

            $scope.changeName = function() {
                User.nameChange(names[helpers.rand(0, names.length - 1)]) 
            };
            $scope.stopName = function() {
                User.stop(updateNameInScope);
            };
        });


})();