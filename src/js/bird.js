(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Bird = function Bird(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    ns.Bird.prototype.layEggs = function layEggs(eggCount){
        eggCount = Math.ceil(Math.random()*10);
        return eggCount;
    };



})(window.zoo);
