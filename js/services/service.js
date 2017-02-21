(function() {
    angular.module('app')
        .service('User', function() {
            
            var callbacks = [];

            this.registerCallback = function (cb) {
                if (typeof cb === 'function') {
                    callbacks.push(cb);
                }
            };
            

            this.name = 'Васян';
            

            this.nameChange = function (value) {
                this.name = value;
                for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i](this.name);
                    
                }
            }
            this.stop = function (cb) {
               for (var i = 0; i < callbacks.length; i++) {
                    if(cb ===  callbacks[i]){
                        callbacks.splice(i,1);
                    }
                    
                }
            }
        });
    
    
    
})();