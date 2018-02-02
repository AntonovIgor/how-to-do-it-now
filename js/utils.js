'use strict';

(function() {

    var randomNumber = function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    }   

    var sumIt = function(a, b) {
        return a + b;
    }

    window.utils = {
        randomNumber,
        sumIt
    }
    
})();