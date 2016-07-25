(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});


    ns.Animal = function Animal(name){
        // var birthtime = Date.now();

        this.name = name;
        this.dob = new Date();
        // this.age = Date.now() - birthtime;
    };



})(window.zoo);

//# sourceMappingURL=main.js.map