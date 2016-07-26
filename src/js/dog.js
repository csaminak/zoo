(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    /**
     * A constructor function that allows any Dog in the current context and
     * and replace it in the Animal constructor.
     * @param   {String}   name    The name of the Dog
     * @return  {Object}   Dog    Has same properties as animal constructor
     */
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
        if (!puppyName){
            throw new Error('What is the puppy\'s name?');
        }
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
