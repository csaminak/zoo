(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Dog = function Dog(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(window.zoo.Animal.prototype);
    


})(window.zoo);