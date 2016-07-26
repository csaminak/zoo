(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Animal = function Animal(name){
        this.name = name;
        this.dob = new Date();
    };

    ns.Animal.prototype.age = function age(){
        var birthYear = this.dob.getFullYear();
        var currentYear = (new Date()).getFullYear();
        return currentYear - birthYear;
    };

    ns.Animal.prototype.toString = function() {
        return 'I am an animal named, ' + this.name + '!';
    };


})(window.zoo);
