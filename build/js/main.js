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

    ns.Bird = function Bird(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    



})(window.zoo);

(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Dog = function Dog(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    ns.Dog.prototype.birth = function birth(){
        return new ns.Dog(name);
    };



})(window.zoo);

//# sourceMappingURL=main.js.map