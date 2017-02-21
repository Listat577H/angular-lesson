(function() {
    angular.module('app')
        .value('helpers', {
            rand: function(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        });
})();