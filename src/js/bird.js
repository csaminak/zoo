(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});


    ns.Bird = function Bird(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(window.zoo.Animal.prototype);

    ns.Mammal.prototype.birth = true;


})(window.zoo);
