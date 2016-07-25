(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Reptile = function Reptile(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Reptile.prototype = Object.create(window.zoo.Animal.prototype);



    ns.Mammal = function Mammal(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Mammal.prototype = Object.create(window.zoo.Animal.prototype);




})(window.zoo);
