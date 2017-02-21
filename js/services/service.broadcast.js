(function() {
    angular.module('app')
        .service('ServisUser', function($rootScope,helpers) {
            this.broadcast = function(){
               helpers.rand();
               var names = ['Пылып', 'Петро', 'Иннокентий', 'Береза', 'Василий'];
               $rootScope.$broadcast('eho:name', names[helpers.rand(0, names.length - 1)]);

            };
        });
})();