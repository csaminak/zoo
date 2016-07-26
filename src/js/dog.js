(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Dog = function Dog(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    ns.Dog.prototype.birth = function birth(puppyName){
        return new ns.Dog(puppyName);
    };

    
})(window.zoo);
