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


})(window.zoo);

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

//# sourceMappingURL=main.js.map