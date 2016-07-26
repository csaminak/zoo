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

(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});


    ns.Bird = function Bird(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * Calcualtes a random number of eggs a bird can lay from 1 to 10
     * and gives an array of eggs that are new Birds.
     * @return {Array}  each index in the array is a Bird object
     */
    ns.Bird.prototype.layEggs = function layEggs(){
        var nest = [];
        var eggs = Math.ceil(Math.random()*10);
        var i;
        for(i = 1; i <= eggs; i++) {
            nest.push(new ns.Bird());
        }
        return nest;
    };

    /**
     * Gives the distance a bird flies given a duration and converts it into
     * hours given the average speed is 60 mph for a bird.
     * @param  {Number}     duration     Must be in minutes
     * @return {Number}                  The total distance in miles
     */
    ns.Bird.prototype.flight = function flight(duration){
        var hours = duration/60;
        var speed = 60;
        var miles = speed * hours;
        return miles;
    };


})(window.zoo);

(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    ns.Dog = function Dog(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Dog.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Dog.prototype.constructor = ns.Dog;

    /**
     * The Dog object has a birth function in which the dog
     * can give birth to a Dog
     * @param  {String}  puppyName  the name of the new Dog object
     * @return {Object}             a Dog object
     */
    ns.Dog.prototype.birth = function birth(puppyName){
        return new ns.Dog(puppyName);
    };

    /**
     * tricks takes a number from 1 to 5, with each number representing a
     * specific type of trick.
     * @param  {Number}   number  A number from 1-5
     * @return {String}           A string with the type of trick the dog knows
     */
    ns.Dog.prototype.tricks = function tricks(num) {
        if (num === 1) {
            return 'Dog knows speak, woof!';
        } else if (num === 2) {
            return 'Dog knows how to shake hands!';
        } else if (num === 3) {
            return 'Dog can rollover on command!';
        } else if (num === 4) {
            return 'Dog can get you a drink, so helpful!';
        } else if (num === 5) {
            return 'Dog can dance, such a good partner!';
        }
    };



})(window.zoo);

//# sourceMappingURL=main.js.map